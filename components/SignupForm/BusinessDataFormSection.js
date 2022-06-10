import {
  connect,
  ErrorMessage,
  Field,
  getIn,
} from 'formik';
import ReactInputMask from 'react-input-mask';
import { mask } from '@/helpers';
import { FieldBox } from './FieldBox';
import { FormSection } from './FormSection';

export function BusinessDataFormSection() {
  return (
    <FormSection name="Dados da Empresa">
      <FieldBox inputMode="numeric" name="documentoNacional" label="CNPJ" type="text" as={ReactInputMask} mask={mask.cnpj} maskChar="" />
      <InscricaoEstadualField name="documentoEstadual" />
      <FieldBox autoCaptalize="words" name="razaoSocial" label="Razão Social" type="text" />
      <FieldBox autoCaptalize="words" name="nome" label="Representante" type="text" />
      <FieldBox name="apelido" label="Como você gosta de ser chamado" type="text" />
    </FormSection>
  );
}

const InscricaoEstadualField = connect(({ formik, name }) => {
  const error = getIn(formik.errors, name);
  const touch = getIn(formik.touched, name);
  const { values } = formik;

  return (
    <div className={`col-md-12 mb-3 ${error && touch ? 'invalid-field' : ''}`}>
      <label htmlFor={name}>Incrição Estadual:</label>
      <div className="insc-estadual-input-wrap">
        <Field type="text" name={name} id={name} className="form-control" disabled={values.isento_ie} />
        <div className="form-check d-flex align-items-center">
          <Field type="checkbox" name="isento_ie" className="form-check-input mt-0" id="isento_ie" />
          <label className="form-check-label mb-0" htmlFor="isento_ie">Isento</label>
        </div>
      </div>
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
});
