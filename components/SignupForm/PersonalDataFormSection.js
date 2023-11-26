import { connect } from 'formik';
import ReactInputMask from 'react-input-mask';
import { mask } from '@/helpers';
import { FieldBox } from './FieldBox';
import { FormSection } from './FormSection';

export const PersonalDataFormSection = connect(() => (
  <FormSection name="Dados pessoais">
    <FieldBox inputMode="numeric" name="documentoNacional" label="CPF" type="text" as={ReactInputMask} mask={mask.cpf} maskChar="" />
    <FieldBox autoCapitalize="none" name="documentoEstadual" label="RG" type="text" />
    <FieldBox autoCapitalize="words" name="nome" label="Nome completo" type="text" />
    <FieldBox name="apelido" label="Como você gosta de ser chamado?" type="text" />
    <FieldBox inputMode="numeric" name="dataNascimento" label="Data de nascimento" type="text" as={ReactInputMask} mask={mask.date} maskChar="" />
    <FieldBox name="genero" label="Gênero" type="select">
      <option>Selecione</option>
      <option value="F">Feminino</option>
      <option value="M">Masculino</option>
    </FieldBox>
  </FormSection>
));
