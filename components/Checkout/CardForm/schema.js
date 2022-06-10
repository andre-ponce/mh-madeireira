import {
  object,
  string,
  setLocale,
  addMethod,
  ref,
} from 'yup';
import { ptShort } from 'yup-locale-pt';
import { validate } from '@/helpers';

setLocale(ptShort);

function isLuhnValid(errorMessage) {
  return this.test('isLuhnValid', errorMessage, (value) => {
    if (value) {
      const ccNumber = value.replace(/[^\d]+/g, '');
      return validate.luhn(ccNumber);
    }
    return false;
  });
}

addMethod(string, 'isLuhnValid', isLuhnValid);

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

export const cardSchema = object({
  number: string()
    .trim()
    .required('O número do cartão é obrigatório')
    .min(15)
    .max(19)
    .isLuhnValid('Número de cartão inválido'),
  issuer: string()
    .required('A banderia é obrigatória'),
  name: string()
    .required('O nome do titular do cartão é obrigatório'),
  month: string()
    .required('O mês de vencimento é obrigatório')
    .test({
      name: 'expiration',
      exclusive: false,
      params: {},
      message: 'Essa data não é mais válida',
      test: function test(value) {
        const { year } = this.parent;
        if (
          parseInt(year, 10) === currentYear
          && parseInt(value, 10) < currentMonth
        ) {
          return false;
        }
        return true;
      },
    }),
  year: string()
    .required('O ano de vencimento é obrigatório'),
  cvv: string()
    .trim()
    .min(3)
    .max(4)
    .required('O código de segurança é obrigatório'),
});
