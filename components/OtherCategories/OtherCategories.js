import React from 'react';

function OtherCategories() {
  return (
    <section
      className="main__others-categories app-container"
      data-aos="fade-up-left"
      data-aos-duration="2000"
      data-aos-offset="500"
    >
      <h2 className="title-border-left">OUTRAS CATEGORIAS</h2>
      <div className="others-categories__container">
        <a className="others-categories__other-category" href="./categoria.html">
          <img className="other-category__image" src="/images/motor-icon.png" alt="motor" />
          <span className="other-category__name">Motor</span>
        </a>
        <a className="others-categories__other-category" href="./categoria.html">
          <img
            className="other-category__image"
            src="/images/braskape-icon-categorias-2.png"
            alt="motor"
          />
          <span className="other-category__name">Palhetas</span>
        </a>
        <a className="others-categories__other-category" href="./categoria.html">
          <img
            className="other-category__image"
            src="/images/braskape-icon-categorias-3.png"
            alt="motor"
          />
          <span className="other-category__name">Freio</span>
        </a>
        <a className="others-categories__other-category" href="./categoria.html">
          <img
            className="other-category__image"
            src="/images/braskape-icon-categorias-4.png"
            alt="motor"
          />
          <span className="other-category__name">Suspensão</span>
        </a>
        <a className="others-categories__other-category" href="./categoria.html">
          <img
            className="other-category__image"
            src="/images/braskape-icon-categorias-5.png"
            alt="motor"
          />
          <span className="other-category__name">Filtro</span>
        </a>
        <a className="others-categories__other-category" href="./categoria.html">
          <img
            className="other-category__image"
            src="/images/braskape-icon-categorias-6.png"
            alt="motor"
          />
          <span className="other-category__name">Ignição e Elétrica</span>
        </a>
        <a className="others-categories__other-category" href="./categoria.html">
          <img
            className="other-category__image"
            src="/images/braskape-icon-categorias-7.png"
            alt="motor"
          />
          <span className="other-category__name">Correias</span>
        </a>
        <a className="others-categories__other-category" href="./categoria.html">
          <img
            className="other-category__image"
            src="/images/braskape-icon-categorias-8.png"
            alt="motor"
          />
          <span className="other-category__name">Engrenagem</span>
        </a>
      </div>
    </section>
  );
}

export default OtherCategories;
