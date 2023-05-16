function normalize(path) {
  let normal = `${path}`;
  if (!normal.endsWith('/')) {
    normal = `${normal}/`;
  }

  return normal;
}

function fallback(fileName, baseUrl, fallbackImage) {
  if (!fileName) {
    return fallbackImage === undefined ? '/images/no-image-avaliable.jpg' : fallbackImage;
  }

  return new URL(fileName, baseUrl).href;
}

let statics = {
  urlBase: undefined,
  product: undefined,
  brand: undefined,
  category: undefined,
  banner: undefined,
  documentos: undefined,
  anexos: undefined,
  layouts: undefined,
};

export function configureStatics(data) {
  const urlBase = normalize(data.urlBaseEstaticos);

  statics = {
    urlBase,
    product: new URL(normalize(data.diretorioProdutos), urlBase).href,
    brand: new URL(normalize(data.diretorioMarcas), urlBase).href,
    category: new URL(normalize(data.diretorioCategorias), urlBase).href,
    banner: new URL(normalize(data.diretorioBanners), urlBase).href,
    documentos: new URL(normalize(data.diretorioDocumentos), urlBase).href,
    anexos: new URL(normalize(data.diretorioAnexos), urlBase).href,
    layouts: new URL(normalize(data.diretorioLayouts), urlBase).href,
  };
}

export const url = {
  imageProduct: (fileName, fallbackImage) => fallback(fileName, statics.product, fallbackImage),
  imageBrand: (fileName, fallbackImage) => fallback(fileName, statics.brand, fallbackImage),
  imageCategory: (fileName, fallbackImage) => fallback(fileName, statics.category, fallbackImage),
  imageBanner: (fileName, fallbackImage) => fallback(fileName, statics.banner, fallbackImage),
  imageLayout: (fileName, fallbackImage) => fallback(fileName, statics.layouts, fallbackImage),
};
