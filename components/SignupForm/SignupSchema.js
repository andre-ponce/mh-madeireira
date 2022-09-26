import {
  object,
  string,
  date,
  boolean,
  ref,
  setLocale,
  addMethod,
} from 'yup';
import { ptShort } from 'yup-locale-pt';
import { validate } from '@/helpers';
import { isEmailAvaliable } from '@/services/clients.service';

setLocale(ptShort);

function brasilianDocument(errorMessage) {
  return this.test('brasilianDocument', errorMessage, (value) => {
    if (value) {
      const doc = value.replace(/[^\d]+/g, '');
      return doc.length === 11 ? validate.cpf(doc) : validate.cnpj(doc);
    }
    return false;
  });
}

addMethod(string, 'brasilianDocument', brasilianDocument);

export const userSchema = object({
  email: string().required().email()
    .lowercase()
    .trim()
    .min(3)
    .max(100)
    .test('avaliable', 'E-mail já cadastrado', isEmailAvaliable),
  senha: string().required()
    .min(8)
    .max(20)
    .test('dificuldade', 'A senha deve conter pelo menos um caracter númerico', (senha) => /\d/g.test(senha))
    .test('dificuldade', 'A senha deve conter pelo menos uma letra', (senha) => /\D/g.test(senha)),
  senhaConfirmacao: string().oneOf([ref('senha'), null], 'A senha e a confirmação devem ser iguais'),
  nome: string().required(),
  apelido: string().required(),
  documentoNacional: string().required()
    .min(11)
    .max(18)
    .brasilianDocument('Documento inválido, confira o número digitado'),
  documentoEstadual: string(),
  dataNascimento: date().nullable().min(new Date(1920, 1, 1), 'Data de nascimento inválida'),
  genero: string().nullable().test('genero', 'Selecione um gênero', (value) => /^(M|F)$/i.test(value)),
  endereco: string().required(),
  numero: string().required(),
  complemento: string(),
  bairro: string().required(),
  cidade: string().required(),
  estado: string().required().max(2),
  cep: string().required()
    .test('format', 'CEP inválido', (value) => !value || value.replace(/[^\d]+/g, '').length === 8),
  telefone: string().test('telefone', 'Número inválido', validate.phoneNumber),
  celular: string().required().test('celular', 'Número inválido', validate.phoneNumber),
  recebeNewsletter: boolean().optional(),
  tipo: string().required(),
});
