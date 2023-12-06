import { Formik, Form } from 'formik';
import { object, ref, string } from 'yup';
import { isEmailAvaliable } from '@/services/clients.service';
import { FieldBox } from './FieldBox';

export const schema = object({
  email: string().required().email()
    .lowercase()
    .trim()
    .min(3)
    .max(100)
    .test('avaliable', 'E-mail já cadastrado', isEmailAvaliable),
  emailConfirmacao: string().oneOf([ref('email'), null], 'O e-mail e a confirmação devem ser iguais'),
});

export function ChangeEmailForm({ user, onSubmit }) {
  async function submit(values, { setSubmitting }) {
    setSubmitting(true);
    const { novoEmail } = values;
    await onSubmit({ novoEmail });
    setSubmitting(false);
  }

  const initialValues = {
    ...user,
    dataNascimento: user.dataNascimento
      ? new Date(user.dataNascimento)
      : null,
  };

  return (
    <main className="main main-cadastro app-container">
      <h2 className="page-title">Alterar e-mail de acesso</h2>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={submit}>
        {() => (
          <Form className="main__form">
            <FieldBox name="email" label="E-mail Atual" readOnly />
            <FieldBox inputMode="email" autoComplete="email" name="novoEmail" label="Novo E-mail" type="email" />
            <FieldBox inputMode="email" autoComplete="email" name="emailConfirmacao" label="Repita seu E-mail" type="email" />
            <div style={{ textAlign: 'center' }}>
              <button className="btn btn-secondary mt-3" style={{ borderRadius: 0 }} type="submit">Alterar E-mail</button>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
}
