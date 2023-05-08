import { useFormik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import { linkTo } from '@/helpers';

export function LoginBox({ doLogin }) {
  const [loginFailed, setLoginFailed] = useState(false);
  const [internalError, setInternalError] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      user: '',
      password: '',
    },
    validate: ({ user, password }) => {
      const errors = {};

      if (!user) {
        errors.user = 'O E-mail é obrigatório';
      }

      if (!password) {
        errors.password = 'A Senha é obrigatória';
      }

      return errors;
    },
    onSubmit: async ({ user, password }) => {
      if (loading) {
        return;
      }

      setInternalError(false);
      setLoginFailed(false);

      setLoading(true);
      const { autenticado, next } = await doLogin(user, password);
      setLoading(false);

      if (!autenticado) {
        setLoginFailed(true);
        return;
      }

      next();
    },
  });

  return (
    <div className="main__left">
      <div className="main__left__title">Já sou cadastrado</div>
      <div className="main__left__subtitle">Se você é cadastrado digite seus dados:</div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label htmlFor="user">E-mail:</label>
            <input
              className="form-control"
              required
              type="email"
              name="user"
              id="user"
              value={formik.values.user}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="password">Senha:</label>
            <input
              className="form-control"
              required
              type="password"
              name="password"
              id="email"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <p className="main_form_obs">
            <Link href={linkTo.recoveryAccount()}>Esqueceu sua senha?</Link>
          </p>
          <div className="col-md-12 mb-3">
            <button className="main__form__button btn-secondary" type="submit">
              {
                loading ? (
                  <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Entrando...</span>
                  </div>
                ) : 'Entrar'
              }
            </button>
            {
              loginFailed
              && (
                <>
                  <br />
                  <p className="text-danger text-center">E-mail/Senha Inválidos</p>
                </>
              )
            }
            {
              internalError
              && (
                <>
                  <br />
                  <p className="text-danger text-center">Erro ao processar sua requisição, tente novamente!</p>
                </>
              )
            }
          </div>
        </div>
      </form>
    </div>
  );
}
