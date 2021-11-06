export function ProductRecommendForm() {
  return (
    <>
      <form className="main__form">
        <div className="main__left">
          <div className="main__left__title">Seus dados</div>
          <div className="col-md-12 mb-3">
            <label for="validationDefault01">Nome</label>
            <input type="email" className="form-control" id="validationDefault01" required />
          </div>
          <div className="col-md-12 mb-3">
            <label for="validationDefault02">E-mail</label>
            <input type="text" className="form-control" id="validationDefault02" required />
          </div>

          <div className="col-md-12 mb-3 desk-msg">
            <label for="validationDefault02">mensagem</label>
            <textarea type="text" className="form-control" id="validationDefault02" required></textarea>
          </div>

        </div>

        <div className="main__right">
          <div className="main__right__title">Dados do seu amigo</div>
          <div className="col-md-12 mb-3">
            <label for="validationDefault01">Nome</label>
            <input type="email" className="form-control" id="validationDefault01" required />
          </div>
          <div className="col-md-12 mb-3">
            <label for="validationDefault02">E-mail</label>
            <input type="text" className="form-control" id="validationDefault02" required />
          </div>

          <div className="col-md-12 mb-3 mobile-msg">
            <label for="validationDefault02">Mensagem</label>
            <textarea type="text" className="form-control" id="validationDefault02" required></textarea>
          </div>

          <div className="col-md-12 mb-3">
            <button className="form-submit">Enviar</button>
          </div>
        </div>

      </form>
    </>
  );
}
