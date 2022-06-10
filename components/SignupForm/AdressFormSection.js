import { connect } from 'formik';
import { useEffect, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import { mask } from '@/helpers';
import { findAddress } from '@/services/cep.service';
import { FieldBox } from './FieldBox';
import { FormSection } from './FormSection';

const ufs = [
  { id: 27, uf: 'AL', nome: 'Alagoas' },
  { id: 12, uf: 'AC', nome: 'Acre' },
  { id: 16, uf: 'AP', nome: 'Amapá' },
  { id: 13, uf: 'AM', nome: 'Amazonas' },
  { id: 29, uf: 'BA', nome: 'Bahia' },
  { id: 23, uf: 'CE', nome: 'Ceará' },
  { id: 53, uf: 'DF', nome: 'Distrito Federal' },
  { id: 32, uf: 'ES', nome: 'Espírito Santo' },
  { id: 52, uf: 'GO', nome: 'Goías' },
  { id: 21, uf: 'MA', nome: 'Maranhão' },
  { id: 51, uf: 'MT', nome: 'Mato Grosso' },
  { id: 50, uf: 'MS', nome: 'Mato Grosso do Sul' },
  { id: 31, uf: 'MG', nome: 'Minas Gerais' },
  { id: 15, uf: 'PA', nome: 'Pará' },
  { id: 25, uf: 'PB', nome: 'Paraíba' },
  { id: 41, uf: 'PR', nome: 'Paraná' },
  { id: 26, uf: 'PE', nome: 'Pernambuco' },
  { id: 22, uf: 'PI', nome: 'Piauí' },
  { id: 33, uf: 'RJ', nome: 'Rio de Janeiro' },
  { id: 24, uf: 'RN', nome: 'Rio Grande do Norte' },
  { id: 43, uf: 'RS', nome: 'Rio Grande do Sul' },
  { id: 11, uf: 'RO', nome: 'Rondônia' },
  { id: 14, uf: 'RR', nome: 'Roraíma' },
  { id: 42, uf: 'SC', nome: 'Santa Catarina' },
  { id: 35, uf: 'SP', nome: 'São Paulo' },
  { id: 28, uf: 'SE', nome: 'Sergipe' },
  { id: 17, uf: 'TO', nome: 'Tocantins' },
];

export const AdressFormSection = connect(({
  formik: { values: { cep }, setFieldValue },
  ignoreAutoFill,
}) => {
  const [busy, setBusy] = useState(false);
  const [zipCodeNotFound, setZipCodeNotFound] = useState(false);

  async function autoFillAddress(zipcode) {
    try {
      const res = await findAddress(zipcode);
      const {
        street,
        neighborhood,
        city,
        state,
        notFound,
      } = res;
      setZipCodeNotFound(notFound);
      setFieldValue('endereco', street || '');
      setFieldValue('bairro', neighborhood || '');
      setFieldValue('cidade', city || '');
      setFieldValue('estado', state || '');
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    if (!cep || ignoreAutoFill) return;
    const zipcode = cep.replace(/[^\d]+/g, '');
    if (zipcode.length === 8) {
      autoFillAddress(zipcode);
      setBusy(true);
    }
  }, [cep]);

  return (
    <FormSection name="Endereço">
      <FieldBox autoComplete="cep" name="cep" label="CEP" type="text" as={ReactInputMask} mask={mask.cep} maskChar="" busy={busy} />
      {zipCodeNotFound && <div className="col-md-12 mb-3 text-danger"><strong>CEP não encontrado na base dos correios</strong></div>}
      <FieldBox autoComplete="endereco" name="endereco" label="Endereço" type="text" />
      <FieldBox autoComplete="numero" name="numero" label="Número" type="text" />
      <FieldBox autoComplete="complemento" name="complemento" label="Complemento" type="text" />
      <FieldBox autoComplete="bairro" name="bairro" label="Bairro" type="text" />
      <FieldBox autoComplete="cidade" name="cidade" label="Cidade" type="text" />
      <FieldBox autoComplete="estado" name="estado" label="Estado" type="select">
        <option>Selecione</option>
        {ufs.map(({ uf, nome }) => <option key={uf} value={uf}>{nome}</option>)}
      </FieldBox>
    </FormSection>
  );
});
