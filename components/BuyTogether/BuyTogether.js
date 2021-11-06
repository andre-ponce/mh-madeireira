export function BuyTogether() {
  return (
    <div className="main__buy-together" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
      <h2 className="title-border-left">Compre Junto</h2>
      <div className="buy-together__container">
        <div className="product">
          <a className="product__topbar">
            <img src="/images/product4.jpg" alt="Produto x" />
            <span className="topbar__discount">
              -99%
            </span>
          </a>
          <div className="product__infos">
            <a href="#">
              <h3 className="infos__name">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...</h3>
            </a>
          </div>
          <div className="product__prices">
            <strong className="prices__actual">R$ 999,99</strong>
          </div>
        </div>

        <img className="buy-together__image-plus" src="src/images/buy-together_plus.png" alt="" />
        <div className="buy-together__options">
          <div className="buy-together-carousel">
            <div className="options__option-to-buy">
              <input type="checkbox" name="comprejunto1" id="comprejunto1" />
              <label className="label-img" for="comprejunto1">
                <img src="/images/product2.jpg" alt="product" />
              </label>
              <label for="comprejunto1" className="option-to-buy__infos">
                <span className="infos__name">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...</span>
                <span className="infos__price">R$ 999,99</span>
              </label>
            </div>
            <div className="options__option-to-buy">
              <input type="checkbox" name="comprejunto2" id="comprejunto2" />
              <label className="label-img" for="comprejunto2">
                <img src="/images/product1.jpg" alt="product" />
              </label>
              <label for="comprejunto2" className="option-to-buy__infos">
                <span className="infos__name">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...</span>
                <span className="infos__price">R$ 999,99</span>
              </label>
            </div>
          </div>

          <div className="buy-together-carousel">
            <div className="options__option-to-buy">
              <input type="checkbox" name="comprejunto3" id="comprejunto3" />
              <label className="label-img" for="comprejunto3">
                <img src="/images/product1.jpg" alt="product" />
              </label>
              <label for="comprejunto3" className="option-to-buy__infos">
                <span className="infos__name">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...</span>
                <span className="infos__price">R$ 999,99</span>
              </label>
            </div>

            <div className="options__option-to-buy">
              <input type="checkbox" name="comprejunto4" id="comprejunto4" />
              <label className="label-img" for="comprejunto4">
                <img src="/images/product2.jpg" alt="product" />
              </label>
              <label for="comprejunto4" className="option-to-buy__infos">
                <span className="infos__name">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...</span>
                <span className="infos__price">R$ 999,99</span>
              </label>
            </div>

          </div>
        </div>

        <div className="buy-together__block-price">
          <span className="block-price__header">Comprar 3 itens por</span>
          <span className="block-price__price">R$999,99</span>
          <button className="block-price__button">Comprar Junto</button>
        </div>
      </div>

    </div>
  );
}
