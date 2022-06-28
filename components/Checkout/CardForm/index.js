import { format } from '@/helpers';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import { cardSchema as validationSchema } from './schema';
import {
  months, years, getCardIssuer, getInitialValues,
} from './helper';

export function CardForm({
  provedores, onConfigure, savedValues, onCancel,
}) {
  const [issuerConditions, setIssuerConditions] = useState();
  const [submited, setSubmited] = useState(false);
  const initialValues = getInitialValues(savedValues);

  const {
    values,
    getFieldProps,
    setValues,
    getFieldMeta,
    isValid,
  } = useFormik({ initialValues, validationSchema });

  useEffect(() => {
    const { number } = values;
    if (number?.length > 8) {
      const { issuer, isValid } = getCardIssuer(number);
      if (isValid) {
        setValues({ ...values, issuer });
        return;
      }
    }
    setValues({ ...values, issuer: '' });
  }, [values.number]);

  useEffect(() => {
    const provider = provedores.filter((x) => x.slug === values.issuer)[0];
    setIssuerConditions(provider);
  }, [values.issuer]);

  function fieldError(field) {
    const { touched, error } = getFieldMeta(field);
    if (touched || submited) {
      return error;
    }
    return '';
  }

  function submit(ev) {
    setSubmited(true);
    if (isValid) {
      const installment = parseInt(values.installments || '1', 10);
      const condicoes = (issuerConditions?.condicoes || [])
        .filter((x) => x.parcela === installment)[0];
      onConfigure({
        ...issuerConditions,
        condicoes: [condicoes],
        card: { ...values, valid: isValid },
      });
    }
    ev.preventDefault();
  }

  return (
    <form className="card-form" onSubmit={submit}>
      <div className="card-form--group">
        <label htmlFor="number">Número do cartão</label>
        <span className="input-icon">
          <ReactInputMask type="text" inputMode="numeric" mask="9999 9999 9999 9999" maskChar="" id="number" {...getFieldProps('number')} />
          <span className="card-form--group-icon">
            <i className="fa-solid fa-credit-card" />
          </span>
        </span>
        <span className="card-form--group-error">{fieldError('number')}</span>
      </div>

      <div className="card-form--group">
        <label htmlFor="issuer">Bandeira</label>
        <select id="issuer" {...getFieldProps('issuer')}>
          <option value="">Selecione</option>
          {
            !isEmpty(provedores)
            && provedores.map(({ slug, nome }) => <option key={slug} value={slug}>{nome}</option>)
          }
        </select>
        <span className="card-form--group-error">{fieldError('issuer')}</span>
      </div>

      <div className="card-form--group">
        <label htmlFor="name">
          Nome
          {' '}
          <small>(impresso no cartão)</small>
        </label>
        <span className="input-icon">
          <input id="name" type="text" inputMode="text" {...getFieldProps('name')} />
          <span className="card-form--group-icon">
            <i className="fa-solid fa-user" />
          </span>
        </span>
        <span className="card-form--group-error">{fieldError('name')}</span>
      </div>

      <div className="card-form--group">
        <label>Validade</label>
        <div className="card-form--inline-group">
          <select id="month" {...getFieldProps('month')}>
            <option>MM</option>
            {months.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <select id="year" {...getFieldProps('year')}>
            <option>AAAA</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
        <span className="card-form--group-error">{fieldError('month')}</span>
        <span className="card-form--group-error">{fieldError('year')}</span>
      </div>

      <div className="card-form--group">
        <label htmlFor="cvv">CVV</label>
        <ReactInputMask id="cvv" type="text" inputMode="numeric" mask="9999" maskChar="" {...getFieldProps('cvv')} />
        <span className="card-form--group-error">{fieldError('cvv')}</span>
      </div>

      <div className="card-form--group">
        <label htmlFor="installments">Parcelamento</label>
        <select disabled={!values.number || fieldError('number')} {...getFieldProps('installments')} id="installments">
          <option>Selecione o parcelmento</option>
          {
            issuerConditions?.condicoes
            && issuerConditions.condicoes.map((parcelamento) => (
              <option
                key={parcelamento.parcela}
                value={parcelamento.parcela}
              >
                {format.installment(parcelamento)}
              </option>
            ))
          }
        </select>
      </div>

      <div className="card-form--group">
        <button type="submit" className="card-form--button">Usar esse Cartão</button>
        <span className="card-form--link-block" onClick={onCancel}>cancelar</span>
      </div>
    </form>
  );
}
