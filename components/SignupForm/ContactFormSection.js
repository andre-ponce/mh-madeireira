import { connect } from 'formik';
import { useState } from 'react';
import ReactInputMask from 'react-input-mask';
import { mask } from '@/helpers';
import { FieldBox } from './FieldBox';
import { FormSection } from './FormSection';

export const ContactFormSection = connect(({ formik: { isValid, isSubmitting } }) => {
  const [phoneMask, setPhoneMask] = useState();
  const [celphoneMask, setCelphoneMask] = useState();

  return (
    <FormSection name="Dados de Contato">
      <div className="form-row tell-group">
        <FieldBox onInput={(ev) => mask.phone(ev.target.value, setCelphoneMask)} name="celular" label="Celular/Whatsapp" type="tel" inputMode="tel" className="col-sm-12 col-md-6 mb-3" as={ReactInputMask} mask={celphoneMask} maskChar="" />
        <FieldBox onInput={(ev) => mask.phone(ev.target.value, setPhoneMask)} name="telefone" label="Telefone" type="tel" inputMode="tel" className="col-sm-12 col-md-6 mb-3" as={ReactInputMask} mask={phoneMask} maskChar="" />
      </div>
      <FieldBox name="segmento" label="Interesse" type="select">
        <option>Selecione</option>
        <option value="2">Oficina</option>
        <option value="3">Funilaria</option>
      </FieldBox>

      <div className="form-group mt-3">
        <div className="form-check d-flex align-items-center">
          <input className="form-check-input mt-0" type="checkbox" value="" id="invalidCheck2" />
          <label className="form-check-label mb-0" htmlFor="invalidCheck2">
            Aceito receber e-mails com promoções e informativos
          </label>
        </div>
      </div>

      <button disabled={!isValid || isSubmitting} className="btn form-submit mt-3" type="submit">Finalizar</button>
    </FormSection>
  );
});
