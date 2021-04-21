import React from 'react';
import Slick from 'react-slick';
import { mostWantedSettings } from './settings';

function MostWanted() {
  return (
    <section data-aos="fade-up" data-aos-duration="1000" className="container_serie-ds">
      <h2 className="title-border-left">Os mais buscados</h2>
      <Slick className="products-carousel" {...mostWantedSettings}>
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
      </Slick>
    </section>
  );
}

export default MostWanted;
