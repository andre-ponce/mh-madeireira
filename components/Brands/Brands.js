import Link from 'next/link';
import React from 'react';
import Slick from 'react-slick';
import { linkTo } from '@/helpers';

import { url } from '@/services/statics.service';
import settings from './settings';
import { RemoteImage } from '../Image';

function Brands({ brands }) {
  return (
    <section
      className="main__store-front-brands"
      data-aos="fade-up-right"
      data-aos-duration="2000"
      data-aos-offset="500"
    >
      <div className="app-container">
        <h2 className="title-border-left">Top Marcas</h2>
        <Slick {...settings}>
          {brands && brands.map((brand) => (
            <Link key={brand.id} passHref href={linkTo.brand(brand)}>
              <RemoteImage
                src={url.imageBrand(brand.imagem)}
                alt={brand.nome}
                width={125}
                height={125}
              />
            </Link>
          ))}
        </Slick>
      </div>
    </section>
  );
}

export default Brands;
