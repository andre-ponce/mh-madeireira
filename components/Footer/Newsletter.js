import React, { useState } from 'react';
import { useFormik } from 'formik';
import SweetAlert from 'react-bootstrap-sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Newsletter() {
  const [alertMessage, setAlertMessage] = useState('');

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: '',
      name: '',
    },

    onSubmit: async ({ email, name }, { resetForm }) => {
      await fetch('/api/newsletter', {
        body: JSON.stringify({ email, name }),
        method: 'post',
      });

      resetForm();
      setAlertMessage('E-mail cadastrado com Sucesso!');
    },

    validate: async ({ email, name }) => {
      const valErrors = {};
      if (!name) {
        valErrors.name = 'Informe seu nome';
      }

      if (!email) {
        valErrors.email = 'Informe seu e-mail';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        valErrors.email = 'Esse não parece um e-mail válido';
      }

      return valErrors;
    },
  });

  return (
    <div className="footer__newsletter">
      <div className="newsletter__container">
        <div className="newsletter__text">
          <span className="newsletter__text--img">
            <FontAwesomeIcon icon="fa-regular fa-envelope" />
          </span>
          <span className="newsletter__text--content">
            Cadastre-se e receba descontos e
            {' '}
            <strong className="newsletter__text--highlight">ofertas exclusivas</strong>
          </span>
        </div>
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__form__input">
            <input
              className="input-text"
              type="text"
              placeholder="Nome"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
            />
            {touched.name && errors.name && <span>{errors.name}</span>}
          </div>
          <div className="newsletter__form__input">
            <input
              className="input-text"
              type="email"
              placeholder="e-mail"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
            />
            {touched.email && errors.email && <span>{errors.email}</span>}
          </div>
          <div className="form__inputs">
            <button type="submit">
              <span>
                {
                  isSubmitting
                    ? <i className="fa-solid fa-spin fa-spinner" key="spinner" />
                    : <i className="fa-solid fa-paper-plane" key="plane" />
                }
              </span>
              {
                alertMessage && (
                  <SweetAlert onConfirm={() => setAlertMessage('')} btnSize="sm" confirmBtnText="Voltar" confirmBtnStyle={{ border: '0' }}>
                    {alertMessage}
                  </SweetAlert>
                )
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
