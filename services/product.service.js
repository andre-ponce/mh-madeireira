import { products } from '../data';

export async function getProduct (id) {
  return Object.assign(products[0], {
    media: [
      {
        src: '/images/braskape-pagina-produto.jpg',
        alt: 'Photo One',
        id: 1
      }, {
        src: '/images/braskape-pagina-produto.jpg',
        alt: 'Photo Two',
        id: 2
      }, {
        src: '/images/braskape-pagina-produto.jpg',
        alt: 'Photo Three',
        id: 3
      }, {
        src: '/images/braskape-pagina-produto.jpg',
        alt: 'Photo Four',
        id: 4
      }, {
        src: '/images/braskape-pagina-produto.jpg',
        alt: 'Photo Five',
        id: 5
      },
    ]
  })
}

export async function getBuyTogether(id) {
  return products.slice(1, 6);
}

export async function getRelateds (id) {
  return products.slice(1, 8);
}
