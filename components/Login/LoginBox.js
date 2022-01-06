export function LoginBox({ doLogin }) {
  return (
    <div className="main__left">
      <div className="main__left__title">Já sou cadastrado</div>
      <div className="main__left__subtitle">Se você é cadastrado digite seus dados:</div>
      <form className="">
        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" className="form-control" id="email" required />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="validationDefault02">Senha:</label>
            <input type="password" name="password" className="form-control" id="email" required />
          </div>
          <p className="main_form_obs">Esqueceu sua senha?<a><strong>Clique aqui</strong></a> e receba por email!</p>
          <div className="col-md-12 mb-3">
            <button className="main__form__button">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}
