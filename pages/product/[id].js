import { useEffect, useState } from "react";
import Head from 'next/head';
import Slick from 'react-slick';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MostWanted from '../../components/MostWanted';
import ProductCard from '../../components/Product';

import { products } from '../../data';
import settingsRelateds from '../../components/MostWanted/settings';
import Breadcrumb from "../../components/Breadcrumb";

export async function getServerSideProps() {
  const response = await fetch(process.env.API_DADOS_GLOBAIS_HOST, {
    headers: {
      authorization: process.env.API_DADOS_GLOBAIS_TOKEN,
    },
  });

  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

function Product({ data }) {
  const [tab, setTab] = useState('description')
  const [payOptionsVisible, setPayOptionsVisible] = useState(false)

  const {
    static: {
      urlBaseEstaticos,
      diretorioCategorias,
    },
    menu,
  } = data;

  const categories = {
    staticUrl: `${urlBaseEstaticos}${diretorioCategorias}/`,
    menu,
  };

  const settingsGalery = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplay: false,
    autoplaySpeed: 2000,
  }

  useEffect(() => {
    const gl = document.querySelectorAll('.slider__product__galery .slick-slide:not(.slick-cloned)');
    const bl = document.querySelectorAll('.slider__product__galery .slick-dots > li');

    for( a = 0; a < gl.length; a++ ){
      const urlImg = gl[a].querySelector('img').getAttribute('src');
      bl[a].style.backgroundImage = 'url("' + urlImg + '")';
    }
  }, [])

  return (
    <>
      <Head>
        <title>Home - Braskape</title>
      </Head>
      <Header categories={categories} />
      <>
        <main className="container_serie-ds">
          <Breadcrumb slug="Produto" classPrefix="product" />
          <div className="main__product">
            <div className="product__container-left" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
              <Slick className="slider__product__galery" {...settingsGalery}>
                {
                  [0, 1, 2, 3, 4].map(i => (
                    <div><img src="/images/braskape-pagina-produto.jpg" alt="Produto1" key={i} /></div>
                  ))
                }
              </Slick>
            </div>

            <div className="product__container-right" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
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
            </div>

          </div>

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

          <section className="triade" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
            <h2 onClick={() => setTab('description')} className={"title-border-left " + (tab != 'description' ? 'disable__item' : '')}>Descrição</h2>
            <h2 onClick={() => setTab('opinion')} className={"title-border-left " + (tab != 'opinion' ? 'disable__item' : '')}>De sua opinião</h2>
            <h2 onClick={() => setTab('recomend')} className={"title-border-left " + (tab != 'recomend' ? 'disable__item' : '')}>Indique um amigo</h2>

            <div className={"triade__item " + (tab != 'description' ? 'd-none' : '')}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
              <div className="triade__item__title">INFORMAÇÕES TÉCNICAS</div>
              <dl>
                <dt>Composição</dt>
                <dd>100% Algodão</dd>
              </dl>

              <div className="infos__avaliation">
                <div className="avaliation__stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span>Seja o primeiro !</span>
              </div>
            </div>

            <div className={"triade__item pt-5 " + (tab != 'opinion' ? 'd-none' : '')}>
              <a href="">Dê a sua opnião</a>
            </div>

            <div className={"triade__item " + (tab != 'recomend' ? 'd-none' : '')}>
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
                    <label for="validationDefault02">mensagem</label>
                    <textarea type="text" className="form-control" id="validationDefault02" required></textarea>
                  </div>

                  <div className="col-md-12 mb-3">
                    <button className="form-submit">Enviar</button>
                  </div>
                </div>

              </form>
            </div>
          </section>

          <section className="container_serie-ds" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
            <h2 className="title-border-left">Produtos relacionados</h2>
            <Slick className="products-carousel" {...settingsRelateds}>
              {
                products.slice(0, 5).map(p => <ProductCard mostWanted product={p} />)
              }
            </Slick>
          </section>

        </main>
      </>
      {
        !!payOptionsVisible &&
        <PaymentOptionsModal hide={() => setPayOptionsVisible(false)} />
      }
      <Footer />

    </>
  )
}

function PaymentOptionsModal({ hide }) {

  useEffect(() => {
    const ESC_KEY_CODE = 27;

    function keyUp(e) {
      if (e.keyCode == ESC_KEY_CODE) {
        hide();
      }
    }

    window.addEventListener('keyup', keyUp);

    return () => {
      window.removeEventListener('keyup', keyUp);
    }
  }, []);

  return (
    <div className="overlay" style={{ display: 'block' }} onClick={() => hide()}>
      <div className="modal__pedido" onClick={(e) => e.stopPropagation()}>
        <a className="close" onClick={() => hide()}><i className="fal fa-times"></i></a>
        <div className="title">Formas de pagamento</div>
        <div className="modal__forma">
          <a className="modal__forma__item active">Cartão</a>
          <a className="modal__forma__item">Boleto</a>
        </div>
        <div className="modal__block">
          <table>
            <tr>
              <td>1x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>2x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>3x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>4x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>5x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>6x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>7x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>8x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>9x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>10x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>11x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>12x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Product;

{/* <script src="./src/js/slider.js"></script>
<script src="./src/js/lightbox.js"></script>
<script src="./src/js/fixed_menu.js"></script>
<script src="./src/js/animations.js"></script> */}