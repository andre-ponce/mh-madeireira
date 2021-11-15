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
  },

  discount(value) {
    return `-${value.toFixed(0)}%`
  },

  nationalDocument (number, prefixType) {
    if (!number) return '';

    const onlyNumbers = (number + '').replace(/[^0-9]+/g, '')

    if (onlyNumbers.length == 11) {
      return `${prefixType ? 'CPF' : ''} ${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3, 6)}.${onlyNumbers.slice(6, 9)}.${onlyNumbers.slice(9, 11)}`
    }
    else if (onlyNumbers.length == 14) {
      return `${prefixType ? 'CNPJ' : ''} ${onlyNumbers.slice(0, 2)}.${onlyNumbers.slice(2, 5)}.${onlyNumbers.slice(5, 8)}/${onlyNumbers.slice(8, 12)}-${onlyNumbers.slice(12, 14)}`;
    }
    else {
      return '';
    }
  }
}

export const link = {

  whatsappApi (number) {

    if (!number) return '';

    let sanitize = number + '';
    sanitize = sanitize.replace(/[^0-9]+/g, '');
    sanitize = sanitize.replace(/^0?55/, '');

    return `https://wa.me/055${sanitize}`;
  },

  mailto (email) {
    return `mailto:${email}`;
  },

  tel (phone) {
    const sanitize = ((phone || '') + '').replace(/[^0-9]+/g, '');
    return `tel:${sanitize}`;
  },

}

export const image = {
  fallback(url) {
    return url || '/images/no-image-avaliable.jpg'
  }
}
