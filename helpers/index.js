export const format = {
  telephone(number) {

    if (!number) return '';

    const onlyNumbers = number.replace(/[^0-9]+/g, '');

    const [
      full,
      country,
      ddd,
      nine,
      phoneStar,
      phoneEnd
    ] = /(0?55)?(\d\d)(\d)?(\d{4})(\d{4})$/.exec(onlyNumbers);

    if (nine != undefined && nine != '9') return '';

    return `(${ddd}) ${nine || ''} ${phoneStar}-${phoneEnd}`.replace(/\s{2,}/, ' ');
  },

  currency(value) {
    return Intl.NumberFormat("pt-BR", {
      style: 'currency',
      currency: "BRL",
      maximumFractionDigits: 2
    }).format(value);
  }
}

export const image = {
  fallback(url) {
    return url || '/images/no-image-avaliable.jpg'
  }
}
