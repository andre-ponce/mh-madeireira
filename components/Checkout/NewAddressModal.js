import { AdressFormSection } from '@/components/SignupForm/AdressFormSection';
import { Formik } from 'formik';
import { FloatBox } from '@/components/Modal/Modal';

export function NewAddressModal({ onSubmit, onClose }) {
  async function submit(address) {
    const res = await fetch('/api/address', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(address),
    });

    if (res.ok) {
      onSubmit(await res.json());
      onClose();
    }
  }

  return (
    <FloatBox handleHide={onClose} canClose title="Cadastrar Novo Endereço">
      <div className="new-address--container">
        <Formik initialValues={{ cep: '' }} onSubmit={submit}>
          <>
            <AdressFormSection />
            <button type="submit" className="new-address--action">Salvar</button>
          </>
        </Formik>
      </div>
    </FloatBox>
  );
}
