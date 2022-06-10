import { connect, ErrorMessage, Field } from 'formik';
import { FieldBox } from './FieldBox';
import { FormSection } from './FormSection';
import { NewAccountEmailField } from './NewAccountEmailField';

export const AccessDataFormSection = connect(({ formik: { errors } }) => (
  <FormSection name="Dados de acesso">
    <NewAccountEmailField name="email" />
    <FieldBox autoComplete="password" name="senha" label="Senha" type="password" />
    <FieldBox autoComplete="password" name="senhaConfirmacao" label="Redigite a senha" type="password" />
    <div className={`col-md-12 ${errors.tipo ? 'invalid-field' : ''}`}>
      <label>Tipo da conta:</label>
      <div>
        <div className="custom-control custom-radio custom-control-inline">
          <Field type="radio" name="tipo" value="f" className="custom-control-input" id="pf" />
          <label className="custom-control-label mb-0 d-flex align-items-center" htmlFor="pf">Pessoa Física</label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <Field type="radio" name="tipo" value="j" className="custom-control-input" id="pj" />
          <label className="custom-control-label mb-0 d-flex align-items-center" htmlFor="pj">Pessoa Jurídica</label>
        </div>
        <ErrorMessage name="tipo" component="div" className="error-message" />
      </div>
    </div>
  </FormSection>
));
