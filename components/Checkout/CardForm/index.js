import { useFormik } from 'formik';
import { useEffect } from 'react';
import ReactInputMask from 'react-input-mask';
import { cardSchema } from './schema';

const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const currentYear = new Date().getFullYear();
const years = [...Array(10).keys()].map((i) => currentYear + i);

function getCardIssuer(rawNumber) {
  // regex's from https://github.com/tgdeveloper/verificar-bandeira-de-cartao-de-credito-em-javascript/

  const number = rawNumber.replace(/[\D]+/g, '');

  const issuer = [
    {
      issuer: 'visa',
      maybe: /^4[0-9]/,
      isValid: /^4[0-9]{12}(?:[0-9]{3})/,
    },
    {
      issuer: 'mastercard',
      maybe: /^5[1-5]/,
      isValid: /^5[1-5][0-9]{14}/,
    },
    {
      issuer: 'diners',
      maybe: /^3(?:0[0-5]|[68][0-9])/,
      isValid: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
    },
    {
      issuer: 'amex',
      maybe: /^3[47]/,
      isValid: /^3[47][0-9]{13}/,
    },
    {
      issuer: 'discover',
      maybe: /^6(?:011|5[0-9]{2})/,
      isValid: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    },
    {
      issuer: 'hipercard',
      maybe: /^(606282)|(3841)/,
      isValid: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
    },
    {
      issuer: 'elo',
      maybe: /^(((636368)|(438935)|(504175)|(451416)|(636297))|((5067)|(4576)|(4011)))/,
      isValid: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
    },
    {
      issuer: 'jcb',
      maybe: /^(?:2131|1800|35)/,
      isValid: /^(?:2131|1800|35\d{3})\d{11}/,
    },
    {
      issuer: 'aura',
      maybe: /^5078/,
      isValid: /^(5078\d{2})(\d{2})(\d{11})$/,
    },
  ]
    .filter((i) => i.maybe.test(number));

  if (issuer.length === 0) {
    return '';
  }

  if (issuer.length > 1) {
    return '';
  }

  const { isValid, ...rest } = issuer[0];
  return { ...rest, isValid: isValid.test(number) };
}

export function CardForm() {
  const {
    values, getFieldProps, setValues, getFieldMeta,
  } = useFormik({
    initialValues: {
      number: '', issuer: '', name: '', month: '', year: '', cvv: '', installments: null,
    },
    validationSchema: cardSchema,
  });

  useEffect(() => {
    const { number } = values;
    if (number && number.length > 8) {
      const { issuer, isValid } = getCardIssuer(number);
      if (isValid) {
        setValues({ ...values, issuer });
        return;
      }
    }
    setValues({ ...values, issuer: '' });
  }, [values.number]);

  function fieldError(field) {
    const { touched, error } = getFieldMeta(field);
    if (touched) {
      return error;
    }
    return '';
  }

  return (
    <>
      <div className="payment-details--group">
        <label htmlFor="number">Número do cartão</label>
        <span className="input-icon">
          <ReactInputMask type="text" inputMode="numeric" mask="9999 9999 9999 9999" maskChar="" id="number" {...getFieldProps('number')} />
          <span className="payment-details--group-icon">
            <i className="fa-solid fa-credit-card" />
          </span>
        </span>
        <span className="payment-details--group-error">{fieldError('number')}</span>
      </div>

      <div className="payment-details--group">
        <label htmlFor="issuer">Bandeira</label>
        <select id="issuer" {...getFieldProps('issuer')}>
          <option value="">Selecione</option>
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
          <option value="diners">Diners</option>
          <option value="amex">American Express</option>
          <option value="discover">Discover</option>
          <option value="hipercard">Hipercard</option>
          <option value="elo">Elo</option>
          <option value="jcb">JCB</option>
          <option value="aura">Aura</option>
        </select>
        <span className="payment-details--group-error">{fieldError('issuer')}</span>
      </div>

      <div className="payment-details--group">
        <label htmlFor="name">
          Nome
          {' '}
          <small>(impresso no cartão)</small>
        </label>
        <span className="input-icon">
          <input id="name" type="text" inputMode="text" {...getFieldProps('name')} />
          <span className="payment-details--group-icon">
            <i className="fa-solid fa-user" />
          </span>
        </span>
        <span className="payment-details--group-error">{fieldError('name')}</span>
      </div>

      <div className="payment-details--group">
        <label>Validade</label>
        <div className="payment-details--inline-group">
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
        <span className="payment-details--group-error">{fieldError('month')}</span>
        <span className="payment-details--group-error">{fieldError('year')}</span>
      </div>

      <div className="payment-details--group">
        <label htmlFor="cvv">CVV</label>
        <ReactInputMask id="cvv" type="text" inputMode="numeric" mask="9999" maskChar="" {...getFieldProps('cvv')} />
        <span className="payment-details--group-error">{fieldError('cvv')}</span>
      </div>

      <div className="payment-details--group">
        <label htmlFor="installments">Parcelamento</label>
        <select disabled={!values.number || fieldError('number')} {...getFieldProps('installments')} id="installments">
          <option>1x</option>
        </select>
      </div>
    </>
  );
}
