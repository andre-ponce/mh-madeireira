import { Formik, Form } from 'formik';
import { object, ref, string } from 'yup';
import { FieldBox } from './FieldBox';

export const schema = object({
  senhaAtual: string().required(),
  senhaNova: string().required()
    .min(8)
    .max(20)
    .test('dificuldade', 'A senha deve conter pelo menos um caracter númerico', (senha) => /\d/g.test(senha))
    .test('dificuldade', 'A senha deve conter pelo menos uma letra', (senha) => /\D/g.test(senha)),
  senhaConfirmacao: string().oneOf([ref('senhaNova'), null], 'A senha e a confirmação devem ser iguais'),
});

export function ChangePasswordForm({ onSubmit }) {
  async function submit(values, { setSubmitting }) {
    setSubmitting(true);
    await onSubmit(values);
    setSubmitting(false);
  }

  return (
    <main className="main main-cadastro app-container">
      <h2 className="page-title">Alterar senha de acesso</h2>
      <Formik initialValues={{}} validationSchema={schema} onSubmit={submit}>
        {() => (
          <Form className="main__form">
            <FieldBox autoComplete="password" name="senhaAtual" label="Senha Atual" type="password" />
            <FieldBox autoComplete="password" name="senhaNova" label="Nova Senha" type="password" />
            <FieldBox autoComplete="password" name="senhaConfirmacao" label="Confirme a nova senha" type="password" />
            <div style={{ textAlign: 'center' }}>
              <button className="btn btn-secondary mt-3" style={{ borderRadius: 0 }} type="submit">Alterar Senha</button>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
}
