import { AdressFormSection } from '@/components/SignupForm/AdressFormSection';
import { Form, Formik } from 'formik';
import { FloatBox } from '@/components/Modal/Modal';
import { useState } from 'react';
import ReactInputMask from 'react-input-mask';
import { mask, validate } from '@/helpers';
import { object, string, setLocale } from 'yup';
import { ptShort } from 'yup-locale-pt';
import { FieldBox } from '../SignupForm/FieldBox';
import { FormSection } from '../SignupForm/FormSection';

setLocale(ptShort);

export function NewAddressModal({ onSubmit, onClose }) {
  const [error, setError] = useState();
  const [phone, setPhone] = useState('');

  async function submit(address) {
    setError(false);
    const res = await fetch('/api/clients/address', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(address),
    });

    if (res.ok) {
      const data = await res.json();
      onSubmit(data);
      onClose();
    } else {
      setError(true);
    }
  }

  const addressSchema = object({
    identificacao: string().required(),
    destinatario: string().required(),
    endereco: string().required(),
    numero: string().required(),
    complemento: string(),
    bairro: string().required(),
    cidade: string().required(),
    estado: string().required().max(2),
    cep: string().required()
      .test('format', 'CEP inválido', (value) => !value || value.replace(/[^\d]+/g, '').length === 8),
    telefone: string().required().test('telefone', 'Número inválido', validate.phoneNumber),
  });

  return (
    <FloatBox handleHide={onClose} canClose title="Cadastrar Novo Endereço">
      <div className="new-address--container">
        <Formik initialValues={{ cep: '' }} validationSchema={addressSchema} onSubmit={submit}>
          {({ isValid, isSubmitting }) => (
            <Form>
              <FormSection>
                <FieldBox label="Identificação do Endereço" tip="casa, trabalho..." name="identificacao" />
                <FieldBox label="Destinatário" name="destinatario" tip="nome de quem deve receber" />
                <FieldBox
                  onInput={(ev) => mask.phone(ev.target.value, setPhone)}
                  name="telefone"
                  label="Telefone/Whatsapp"
                  type="tel"
                  as={ReactInputMask}
                  mask={phone}
                  maskChar=""
                />
              </FormSection>
              <AdressFormSection />
              {error && <div className="new-address--error">Falha ao salvar seu endereço, tente no vamente.</div>}
              <button type="submit" disabled={!isValid || isSubmitting} className="new-address--action btn-secondary">
                {isSubmitting ? 'Salvando...' : 'Salvar'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </FloatBox>
  );
}
