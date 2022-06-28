const currentYear = new Date().getFullYear();

export const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
export const years = [...Array(10).keys()].map((i) => currentYear + i);

// regex's from https://github.com/tgdeveloper/verificar-bandeira-de-cartao-de-credito-em-javascript/
export function getCardIssuer(rawNumber) {
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

export function getInitialValues(saved) {
  const {
    number, issuer, name, month, year, cvv, installments,
  } = saved || {};

  return {
    number: number || '',
    issuer: issuer || '',
    name: name || '',
    month: month || '',
    year: year || '',
    cvv: cvv || '',
    installments: installments || null,
  };
}
