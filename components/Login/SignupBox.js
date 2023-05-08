export function SignupBox({ signup }) {
  function submit(evt) {
    evt.preventDefault();
    const { email, name } = evt.target;
    signup({ email: email.value, name: name.value });
  }

  return (
    <div className="main__right">
      <div className="main__right__title">Novo cadastro</div>
      <div className="main__right__subtitle">Se você ainda não é cadastrado, escolha uma das opções abaixo:</div>
      <form className="" onSubmit={submit}>
        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label htmlFor="name">Primeiro Nome:</label>
            <input type="text" id="name" className="form-control" required />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="email">E-mail:</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <p className="main_form_obs">
            Informe um e-mail válido para que possamos enviar o link de confirmação.
          </p>
          <div className="col-md-12 mb-3">
            <button type="submit" className="main__form__button btn-secondary">Cadastre-se</button>
          </div>
        </div>
      </form>
    </div>
  );
}
