export function BuyBox() {
  return (
    <>
      <div className="product__infos">
        <span className="infos__title">PRODUTO LOREM IPSUM</span>
        <span className="infos__cod">COD: 567055</span>
        <span className="infos__brand">MARCA: LOREM IPSUM</span>
      </div>

      <div className="product__price-infos">
        <div className="price-infos__prices">
          <span className="prices__old">R$ 999,99</span>
          <strong className="prices__actual">R$ 99,99</strong>
        </div>
        <span className="price-infos__installments">99x de <strong>R$99,99</strong></span>
        <span className="price-infos__discount">R$99,91 à vista (com 99% de desconto)</span>
        <div className="price-infos__buy">
          <div className="block_qtd-item">
            <button className="qtd-item__minus">
              <i className="far fa-minus"></i>
            </button>
            <input type="number" disabled min="0" />
            <button className="qtd-item__plus">
              <i className="far fa-plus"></i>
            </button>
          </div>
          <button className="buy__button">COMPRAR</button>
        </div>
        <div className="price-infos__installments-group">
          <a className="open__modal" onClick={() => setPayOptionsVisible(true)}>Mais opcões de pagamento</a>
          <div className="installments-group__installments">
            <span>1x de R$999,99</span>
          </div>
        </div>
        <div className="price-infos__cep">
          <div className="cep__calc-container">
            <input type="number" placeholder="00000-000" max="99999999" />
            <button>CALCULAR</button>
          </div>
          <a className="cep__dont-know" href="">Não sei meu CEP</a>
        </div>
      </div>
    </>
  );
}
