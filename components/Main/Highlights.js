import React from 'react';

function Highlights() {
  return (
    <section
      className="main__vitrine-destaques container_serie-ds"
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-offset="500"
    >
      <h2 className="title-border-left">Destaques</h2>
      <div className="vitrine-destaques__produtos">
        <div className="product">
          <a href="produto.html" className="product__topbar">
            <img src="/images/product1.jpg" alt="Produto x" />
            <span className="topbar__discount"> -99% </span>
          </a>
          <div className="product__infos">
            <strong className="infos__brand">Marca</strong>
            <span className="infos__ref">Ref.: 000000000</span>
            <a href="produto.html">
              <h3 className="infos__name">
                Lorem ipsum sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...
              </h3>
            </a>
          </div>
          <div className="product__prices">
            <span className="prices__old">R$ 999,99</span>
            <strong className="prices__actual">R$ 999,99</strong>
            <span className="prices__installments">
              {' '}
              12x de
              {' '}
              <strong>R$ 99,99</strong>
              {' '}
              s/juros
              {' '}
            </span>
          </div>
          <div className="product__actions">
            <a className="actions__link-category" href="#">+ categoria lorem ipsum</a>
            <div className="actions__buy">
              <div className="number-input">
                <input className="quantity" min="0" name="quantity" value="1" type="number" />
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  className="plus"
                >
                  <i className="far fa-chevron-up" />
                </button>
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  className="minus"
                >
                  <i className="far fa-chevron-down" />
                </button>
              </div>
              <button className="buy__button">COMPRAR</button>
            </div>
          </div>
        </div>
        <div className="product">
          <a href="produto.html" className="product__topbar">
            <img src="/images/product2.jpg" alt="Produto x" />
            <span className="topbar__discount"> -99% </span>
          </a>
          <div className="product__infos">
            <strong className="infos__brand">Marca</strong>
            <span className="infos__ref">Ref.: 000000000</span>
            <a href="produto.html">
              <h3 className="infos__name">
                Lorem ipsum sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...
              </h3>
            </a>
          </div>
          <div className="product__prices">
            <span className="prices__old">R$ 999,99</span>
            <strong className="prices__actual">R$ 999,99</strong>
            <span className="prices__installments">
              {' '}
              12x de
              {' '}
              <strong>R$ 99,99</strong>
              {' '}
              s/juros
              {' '}
            </span>
          </div>
          <div className="product__actions">
            <a className="actions__link-category" href="#">+ categoria lorem ipsum</a>
            <div className="actions__buy">
              <div className="number-input">
                <input className="quantity" min="0" name="quantity" value="1" type="number" />
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  className="plus"
                >
                  <i className="far fa-chevron-up" />
                </button>
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  className="minus"
                >
                  <i className="far fa-chevron-down" />
                </button>
              </div>
              <button className="buy__button">COMPRAR</button>
            </div>
          </div>
        </div>
        <div className="product">
          <a href="produto.html" className="product__topbar">
            <img src="/images/product3.jpg" alt="Produto x" />
            <span className="topbar__discount"> -99% </span>
          </a>
          <div className="product__infos">
            <strong className="infos__brand">Marca</strong>
            <span className="infos__ref">Ref.: 000000000</span>
            <a href="produto.html">
              <h3 className="infos__name">
                Lorem ipsum sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...
              </h3>
            </a>
          </div>
          <div className="product__prices">
            <span className="prices__old">R$ 999,99</span>
            <strong className="prices__actual">R$ 999,99</strong>
            <span className="prices__installments">
              {' '}
              12x de
              {' '}
              <strong>R$ 99,99</strong>
              {' '}
              s/juros
              {' '}
            </span>
          </div>
          <div className="product__actions">
            <a className="actions__link-category" href="#">+ categoria lorem ipsum</a>
            <div className="actions__buy">
              <div className="number-input">
                <input className="quantity" min="0" name="quantity" value="1" type="number" />
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  className="plus"
                >
                  <i className="far fa-chevron-up" />
                </button>
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  className="minus"
                >
                  <i className="far fa-chevron-down" />
                </button>
              </div>
              <button className="buy__button">COMPRAR</button>
            </div>
          </div>
        </div>
        <div className="product">
          <a href="produto.html" className="product__topbar">
            <img src="/images/product4.jpg" alt="Produto x" />
            <span className="topbar__discount"> -99% </span>
          </a>
          <div className="product__infos">
            <strong className="infos__brand">Marca</strong>
            <span className="infos__ref">Ref.: 000000000</span>
            <a href="produto.html">
              <h3 className="infos__name">
                Lorem ipsum sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...
              </h3>
            </a>
          </div>
          <div className="product__prices">
            <span className="prices__old">R$ 999,99</span>
            <strong className="prices__actual">R$ 999,99</strong>
            <span className="prices__installments">
              {' '}
              12x de
              {' '}
              <strong>R$ 99,99</strong>
              {' '}
              s/juros
              {' '}
            </span>
          </div>
          <div className="product__actions">
            <a className="actions__link-category" href="#">+ categoria lorem ipsum</a>
            <div className="actions__buy">
              <div className="number-input">
                <input className="quantity" min="0" name="quantity" value="1" type="number" />
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  className="plus"
                >
                  <i className="far fa-chevron-up" />
                </button>
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  className="minus"
                >
                  <i className="far fa-chevron-down" />
                </button>
              </div>
              <button className="buy__button">COMPRAR</button>
            </div>
          </div>
        </div>
        <div className="product">
          <a href="produto.html" className="product__topbar">
            <img src="/images/product5.jpg" alt="Produto x" />
            <span className="topbar__discount"> -99% </span>
          </a>
          <div className="product__infos">
            <strong className="infos__brand">Marca</strong>
            <span className="infos__ref">Ref.: 000000000</span>
            <a href="produto.html">
              <h3 className="infos__name">
                Lorem ipsum sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...
              </h3>
            </a>
          </div>
          <div className="product__prices">
            <span className="prices__old">R$ 999,99</span>
            <strong className="prices__actual">R$ 999,99</strong>
            <span className="prices__installments">
              {' '}
              12x de
              {' '}
              <strong>R$ 99,99</strong>
              {' '}
              s/juros
              {' '}
            </span>
          </div>
          <div className="product__actions">
            <a className="actions__link-category" href="#">+ categoria lorem ipsum</a>
            <div className="actions__buy">
              <div className="number-input">
                <input className="quantity" min="0" name="quantity" value="1" type="number" />
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  className="plus"
                >
                  <i className="far fa-chevron-up" />
                </button>
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  className="minus"
                >
                  <i className="far fa-chevron-down" />
                </button>
              </div>
              <button className="buy__button">COMPRAR</button>
            </div>
          </div>
        </div>

        <div className="product">
          <a href="produto.html" className="product__topbar">
            <img src="/images/product1.jpg" alt="Produto x" />
            <span className="topbar__discount"> -99% </span>
          </a>
          <div className="product__infos">
            <strong className="infos__brand">Marca</strong>
            <span className="infos__ref">Ref.: 000000000</span>
            <a href="produto.html">
              <h3 className="infos__name">
                Lorem ipsum sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...
              </h3>
            </a>
          </div>
          <div className="product__prices">
            <span className="prices__old">R$ 999,99</span>
            <strong className="prices__actual">R$ 999,99</strong>
            <span className="prices__installments">
              {' '}
              12x de
              {' '}
              <strong>R$ 99,99</strong>
              {' '}
              s/juros
              {' '}
            </span>
          </div>
          <div className="product__actions">
            <a className="actions__link-category" href="#">+ categoria lorem ipsum</a>
            <div className="actions__buy">
              <div className="number-input">
                <input className="quantity" min="0" name="quantity" value="1" type="number" />
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  className="plus"
                >
                  <i className="far fa-chevron-up" />
                </button>
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  className="minus"
                >
                  <i className="far fa-chevron-down" />
                </button>
              </div>
              <button className="buy__button">COMPRAR</button>
            </div>
          </div>
        </div>
        <div className="product">
          <a href="produto.html" className="product__topbar">
            <img src="/images/product2.jpg" alt="Produto x" />
            <span className="topbar__discount"> -99% </span>
          </a>
          <div className="product__infos">
            <strong className="infos__brand">Marca</strong>
            <span className="infos__ref">Ref.: 000000000</span>
            <a href="produto.html">
              <h3 className="infos__name">
                Lorem ipsum sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...
              </h3>
            </a>
          </div>
          <div className="product__prices">
            <span className="prices__old">R$ 999,99</span>
            <strong className="prices__actual">R$ 999,99</strong>
            <span className="prices__installments">
              {' '}
              12x de
              {' '}
              <strong>R$ 99,99</strong>
              {' '}
              s/juros
              {' '}
            </span>
          </div>
          <div className="product__actions">
            <a className="actions__link-category" href="#">+ categoria lorem ipsum</a>
            <div className="actions__buy">
              <div className="number-input">
                <input className="quantity" min="0" name="quantity" value="1" type="number" />
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  className="plus"
                >
                  <i className="far fa-chevron-up" />
                </button>
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  className="minus"
                >
                  <i className="far fa-chevron-down" />
                </button>
              </div>
              <button className="buy__button">COMPRAR</button>
            </div>
          </div>
        </div>
        <div className="product">
          <a href="produto.html" className="product__topbar">
            <img src="/images/product3.jpg" alt="Produto x" />
            <span className="topbar__discount"> -99% </span>
          </a>
          <div className="product__infos">
            <strong className="infos__brand">Marca</strong>
            <span className="infos__ref">Ref.: 000000000</span>
            <a href="produto.html">
              <h3 className="infos__name">
                Lorem ipsum sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...
              </h3>
            </a>
          </div>
          <div className="product__prices">
            <span className="prices__old">R$ 999,99</span>
            <strong className="prices__actual">R$ 999,99</strong>
            <span className="prices__installments">
              {' '}
              12x de
              {' '}
              <strong>R$ 99,99</strong>
              {' '}
              s/juros
              {' '}
            </span>
          </div>
          <div className="product__actions">
            <a className="actions__link-category" href="#">+ categoria lorem ipsum</a>
            <div className="actions__buy">
              <div className="number-input">
                <input className="quantity" min="0" name="quantity" value="1" type="number" />
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  className="plus"
                >
                  <i className="far fa-chevron-up" />
                </button>
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  className="minus"
                >
                  <i className="far fa-chevron-down" />
                </button>
              </div>
              <button className="buy__button">COMPRAR</button>
            </div>
          </div>
        </div>
        <div className="product">
          <a href="produto.html" className="product__topbar">
            <img src="/images/product4.jpg" alt="Produto x" />
            <span className="topbar__discount"> -99% </span>
          </a>
          <div className="product__infos">
            <strong className="infos__brand">Marca</strong>
            <span className="infos__ref">Ref.: 000000000</span>
            <a href="produto.html">
              <h3 className="infos__name">
                Lorem ipsum sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...
              </h3>
            </a>
          </div>
          <div className="product__prices">
            <span className="prices__old">R$ 999,99</span>
            <strong className="prices__actual">R$ 999,99</strong>
            <span className="prices__installments">
              {' '}
              12x de
              {' '}
              <strong>R$ 99,99</strong>
              {' '}
              s/juros
              {' '}
            </span>
          </div>
          <div className="product__actions">
            <a className="actions__link-category" href="#">+ categoria lorem ipsum</a>
            <div className="actions__buy">
              <div className="number-input">
                <input className="quantity" min="0" name="quantity" value="1" type="number" />
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  className="plus"
                >
                  <i className="far fa-chevron-up" />
                </button>
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  className="minus"
                >
                  <i className="far fa-chevron-down" />
                </button>
              </div>
              <button className="buy__button">COMPRAR</button>
            </div>
          </div>
        </div>
        <div className="product">
          <a href="produto.html" className="product__topbar">
            <img src="/images/product5.jpg" alt="Produto x" />
            <span className="topbar__discount"> -99% </span>
          </a>
          <div className="product__infos">
            <strong className="infos__brand">Marca</strong>
            <span className="infos__ref">Ref.: 000000000</span>
            <a href="produto.html">
              <h3 className="infos__name">
                Lorem ipsum sit amet consectetur adipiscing elit sed do eiusmod tempor incidi...
              </h3>
            </a>
          </div>
          <div className="product__prices">
            <span className="prices__old">R$ 999,99</span>
            <strong className="prices__actual">R$ 999,99</strong>
            <span className="prices__installments">
              {' '}
              12x de
              {' '}
              <strong>R$ 99,99</strong>
              {' '}
              s/juros
              {' '}
            </span>
          </div>
          <div className="product__actions">
            <a className="actions__link-category" href="#">+ categoria lorem ipsum</a>
            <div className="actions__buy">
              <div className="number-input">
                <input className="quantity" min="0" name="quantity" value="1" type="number" />
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  className="plus"
                >
                  <i className="far fa-chevron-up" />
                </button>
                <button
                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  className="minus"
                >
                  <i className="far fa-chevron-down" />
                </button>
              </div>
              <button className="buy__button">COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
