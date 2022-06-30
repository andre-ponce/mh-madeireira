export const format = {
  telephone(number) {
    if (!number) return '';

    const onlyNumbers = number.replace(/[^0-9]+/g, '');
    const regexResult = /(0?55)?(\d\d)(\d)?(\d{4})(\d{4})$/.exec(onlyNumbers);
    if (!regexResult) {
      return '';
    }

    const [
      ddd,
      nine,
      phoneStar,
      phoneEnd,
    ] = regexResult.slice(2);

    if (nine !== undefined && nine !== '9') return '';

    return `(${ddd}) ${nine || ''} ${phoneStar}-${phoneEnd}`.replace(/\s{2,}/, ' ');
  },

  currency(value) {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 2,
    }).format(value);
  },

  discount(value) {
    return `-${value.toFixed(0)}%`;
  },

  brasilianDocument(number, prefixType) {
    if (!number) return '';

    const onlyNumbers = number.toString().replace(/[^0-9]+/g, '');

    if (onlyNumbers.length === 11) {
      return `${prefixType ? 'CPF' : ''} ${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3, 6)}.${onlyNumbers.slice(6, 9)}.${onlyNumbers.slice(9, 11)}`;
    }

    if (onlyNumbers.length === 14) {
      return `${prefixType ? 'CNPJ' : ''} ${onlyNumbers.slice(0, 2)}.${onlyNumbers.slice(2, 5)}.${onlyNumbers.slice(5, 8)}/${onlyNumbers.slice(8, 12)}-${onlyNumbers.slice(12, 14)}`;
    }

    return '';
  },

  installment({
    descontoPercentual, parcela, semJuros, valorParcela,
  }) {
    const discount = descontoPercentual > 0 ? ` (${descontoPercentual}% de desconto)` : '';
    const taxNote = semJuros && !discount ? ' (sem juros)' : '';

    return `${parcela} x de ${format.currency(valorParcela)}${discount}${taxNote}`;
  },
};

export const linkTo = {

  whatsappApi(number) {
    if (!number) return '';

    let sanitize = number.toString();
    sanitize = sanitize.replace(/[^0-9]+/g, '');
    sanitize = sanitize.replace(/^0?55/, '');

    return `https://wa.me/055${sanitize}`;
  },

  mailto(email) {
    return `mailto:${email}`;
  },

  tel(phone) {
    const sanitize = (phone || '').toString().replace(/[^0-9]+/g, '');
    return `tel:${sanitize}`;
  },

  category(cat) {
    return `/${cat.slug}/${cat.prefixo.toLowerCase()}/${cat.id}`;
  },

  cart() {
    return '/carrinho';
  },

  checkout() {
    return '/checkout';
  },

  orderConfirmation(code) {
    return `/confirmacao/${code}`;
  },

  brand(brd) {
    return `/${brd.slug}/m/${brd.id}`;
  },

  product(product, category) {
    let categoryPath = '';
    if (category) {
      categoryPath = category.slug;
    }

    return `/${product.slug}/p/${product.id}/${product.marcaSlug}/${categoryPath}`;
  },

  recoveryAccount(returnUrl) {
    if (!returnUrl) {
      return '/recuperar-conta';
    }
    return `/recuperar-conta?returnUrl=${returnUrl}`;
  },

  login(returnUrl) {
    if (!returnUrl) {
      return '/login';
    }
    return `/login?returnUrl=${encodeURIComponent(returnUrl)}`;
  },

  account() {
    return '/minha-conta';
  },

  usersData() {
    return '/minha-conta/cadastro';
  },

  usersAddresses() {
    return '/minha-conta/enderecos';
  },

  myOrders(type) {
    let query = '';
    if (type) {
      query = `?filter=${type}`;
    }
    return `/minha-conta/pedidos${query}`;
  },

  order(code) {
    if (!code) {
      return this.myOrders();
    }
    return `/minha-conta/pedido/${code}`;
  },

  treatment() {
    return '/central-de-atendimento';
  },

  changeEmail() {
    return '/minha-conta/alterar-email';
  },

  changePassword() {
    return '/minha-conta/alterar-senha';
  },

};

export const image = {
  fallback(url, prefix) {
    if (!url) {
      return '/images/no-image-avaliable.jpg';
    }

    return `${prefix || ''}${url}`;
  },
};

export const mask = {
  phone(value, set) {
    const phone = value.replace(/[^0-9]+/g, '');

    if (phone.length > 10) {
      set('(99) 9 9999-9999');
      return;
    }

    set('(99)  9999-99999');
  },
  cep: '99999-999',
  cpf: '999.999.999-99',
  cnpj: '99.999.999/9999-99',
};

export const validate = {
  cpf: (value) => {
    let soma;
    let resto;
    soma = 0;
    if (!value) return false;
    if (Object.keys(value.split('').reduce((prev, current) => ({ ...prev, [current]: 1 }), {})).length === 1) {
      return false;
    }
    for (let i = 1; i <= 9; i += 1) {
      soma += parseInt(value.substring(i - 1, i), 10) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }
    if (resto !== parseInt(value.substring(9, 10), 10)) {
      return false;
    }
    soma = 0;
    for (let i = 1; i <= 10; i += 1) {
      soma += parseInt(value.substring(i - 1, i), 10) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }
    if (resto !== parseInt(value.substring(10, 11), 10)) {
      return false;
    }
    return true;
  },
  cnpj: (value) => {
    let soma;
    let resto;
    soma = 0;
    if (!value) return false;
    if (Object.keys(value.split('').reduce((prev, current) => ({ ...prev, [current]: 1 }), {})).length === 1) {
      return false;
    }
    let fatores = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 1; i <= 12; i += 1) {
      soma += parseInt(value.substring(i - 1, i), 10) * fatores[i - 1];
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }
    if (resto !== parseInt(value.substring(12, 13), 10)) {
      return false;
    }
    soma = 0;
    fatores = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 1; i <= 13; i += 1) {
      soma += parseInt(value.substring(i - 1, i), 10) * fatores[i - 1];
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }
    if (resto !== parseInt(value.substring(13, 14), 10)) {
      return false;
    }
    return true;
  },
  phoneNumber: (value) => {
    if (!value) return true;
    const phoneNumber = value.replace(/[^\d]+/g, '');
    return phoneNumber.length === 10 || phoneNumber.length === 11;
  },
  luhn: (((arr) => (ccNum) => {
    let len = ccNum.length;
    let bit = true;
    let sum = 0;
    let val;

    while (len) {
      len -= 1;
      bit = !bit;
      val = parseInt(ccNum.charAt(len), 10);
      sum += bit ? arr[val] : val;
    }

    return sum && sum % 10 === 0;
  })([0, 2, 4, 6, 8, 1, 3, 5, 7, 9])),
};
