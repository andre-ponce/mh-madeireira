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
  provedores: brands, slug, onConfigure, savedValues, onCancel,
}) {
  const [submited, setSubmited] = useState(false);
  const [brand, setBrand] = useState();
  const initialValues = getInitialValues(savedValues);

  const {
    values: formValues,
    getFieldProps,
    setValues,
    getFieldMeta,
    isValid,
  } = useFormik({ initialValues, validationSchema });

  useEffect(() => {
    const { number } = formValues;
    if (number?.length > 8) {
      const { issuer, isValid: cardValid } = getCardIssuer(number);
      if (cardValid) {
        setValues({ ...formValues, issuer });
        return;
      }
    }
    setValues({ ...formValues, issuer: '' });
  }, [formValues.number]);

  useEffect(() => {
    const cardBrand = brands.filter((x) => x.slug === formValues.issuer)[0];
    setBrand(cardBrand);
  }, [formValues.issuer]);

  function fieldError(field) {
    const { touched, error } = getFieldMeta(field);
    if (touched || submited) {
      return error;
    }
    return '';
  }

  function submit(ev) {
    setSubmited(true);
    ev.preventDefault();
    if (!isValid) {
      return;
    }

    const numberOfinstallment = parseInt(formValues.installments, 10);
    const { condicoes, ...provider } = brand;
    const installment = condicoes.filter(({ parcela }) => parcela === numberOfinstallment)[0];

    onConfigure({
      paymentMethod: slug,
      ...provider,
      condicoes: installment,
      card: { ...formValues, valid: isValid },
    });
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
            !isEmpty(brands)
            && brands.map(({ slug, nome }) => <option key={slug} value={slug}>{nome}</option>)
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
        <select disabled={!formValues.number || !formValues.issuer} {...getFieldProps('installments')} id="installments">
          <option>Selecione o parcelmento</option>
          {
            brand?.condicoes
            && brand.condicoes.map((parcelamento) => (
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
