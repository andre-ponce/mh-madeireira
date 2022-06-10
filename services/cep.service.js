import * as cep from 'cep-promise';

const localCache = {};

async function secureFindAddress(zipcode) {
  try {
    return await cep(zipcode);
  } catch {
    return { notFound: true };
  }
}

export async function findAddress(zipcode) {
  if (!zipcode) {
    return new Error('CEP inválido');
  }

  const zipcodeValue = `${zipcode}`.replace(/[^\d]+/g, '');
  if (zipcodeValue.length !== 8) {
    return new Error('CEP inválido');
  }

  localCache[zipcodeValue] = localCache[zipcodeValue] || secureFindAddress(zipcodeValue);

  return localCache[zipcodeValue];
}

export async function existsAddress(zipcode) {
  const res = await Promise.resolve(findAddress(zipcode));
  return !res.notFound;
}
