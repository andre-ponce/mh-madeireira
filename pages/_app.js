import React, { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/all.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    function TornarHeaderFixo() {
    // Caso seja menor que 1000px, não faça nada
      if (window.innerWidth <= 1000) {
        return;
      }

      $(window).scroll(() => {
        if ($(window).scrollTop() === 0) {
          $('.header__topbar--fixed').addClass('d-none');
          $('.header__menu').removeClass('fixed');
        } else {
          $('.header__menu').addClass('fixed');
          $('.header__topbar--fixed').removeClass('d-none');
        }
      });
    }

    function OrganizarMenu() {
      if ($(window).innerWidth < 992) {
        return;
      }

      const larguraContainer = $('.categorias_container--sd').width();
      const categorias = $('.categorias_container--sd > li');
      const margem = 20;

      let larguraCategorias = 0;

      categorias.each(function () {
        if ($(this).width() > 0 && $(this).is(':visible')) {
          larguraCategorias += ($(this).innerWidth() + margem);
        }
      });

      function VerificarSeEMaior() {
        if (larguraContainer <= larguraCategorias) {
          AddAoVerTudo();
        }
      }

      VerificarSeEMaior();

      function AddAoVerTudo() {
        larguraCategorias -= $(categorias).last().width();

        $('.categorias_container--sd .see-all__submenus')
          .append($('.categorias_container--sd > li').last());

        VerificarSeEMaior();
      }
    }

    $(document).ready(() => {
      OrganizarMenu();
      TornarHeaderFixo();
    });

    $(window).resize(() => {
      OrganizarMenu();
    });

    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />

        <script src="https://kit.fontawesome.com/76ba51fd1c.js" crossOrigin="anonymous" />

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous" />

        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous" />

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous" />
      </Head>

      <Component {...pageProps} />
      <div id="modal-container"></div>
    </>
  );
}

export default MyApp;
