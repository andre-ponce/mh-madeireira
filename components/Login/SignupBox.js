export function SignupBox({ signup }) {
  return <div className="main__right">
    <div className="main__right__title">Novo cadastro</div>
    <div className="main__right__subtitle">Se você ainda não é cadastrado, escolha uma das opções abaixo:</div>
    <form className="">
      <div className="form-row">
        <div className="col-md-12 mb-3">
          <label htmlFor="validationDefault01">E-mail:</label>
          <input type="email" className="form-control" id="validationDefault01" required />
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="cep-1">CEP</label>
          <input type="text" maxlength="5" onkeyup="somenteNumeros(this);" id="cep-1" className="form-control" required />
          <input type="text" maxlength="3" onkeyup="somenteNumeros(this);" id="cep-2" className="form-control" required />
        </div>
        <p className="main_form_obs">Não sabe seu CEP <a>Clique aqui!</a></p>
        <div className="col-md-12 mb-3">
          <button className="main__form__button">Cadastre-se</button>
        </div>
      </div>
    </form>
  </div>;
}
