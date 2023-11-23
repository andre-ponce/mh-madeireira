import { Formik, Form } from 'formik';
import { object, ref, string } from 'yup';
import { FieldBox } from './FieldBox';

export const schema = object({
  senha: string().required()
    .min(8)
    .max(20)
    .test('dificuldade', 'A senha deve conter pelo menos um caracter númerico', (senha) => /\d/g.test(senha))
    .test('dificuldade', 'A senha deve conter pelo menos uma letra', (senha) => /\D/g.test(senha)),
  senhaConfirmacao: string().oneOf([ref('senha'), null], 'A senha e a confirmação devem ser iguais'),
});

export function ChangePasswordForm({ user, onSubmit }) {
  async function submit(values, { setSubmitting }) {
    const { email } = values;

    const res = await onSubmit(body);
    if (!res.sucesso) {
      setSubmitting(false);
    }
  }

  const initialValues = {
    ...user,
    dataNascimento: user.dataNascimento
      ? new Date(user.dataNascimento)
      : null,
  };

  return (
    <main className="main main-cadastro app-container">
      <h2 className="page-title">Alterar senha de acesso</h2>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={submit}>
        {({ errors }) => (
          <Form className="main__form">
            <FieldBox autoComplete="password" name="senha" label="Nova Senha" type="password" />
            <FieldBox autoComplete="password" name="senhaConfirmacao" label="Confirme a senha" type="password" />
            <div style={{ textAlign: 'center' }}>
              <button className="btn btn-secondary mt-3" style={{ borderRadius: 0 }} type="submit">Alterar Senha</button>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
}
