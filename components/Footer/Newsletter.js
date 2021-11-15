import { useFormik } from 'formik';
import React from 'react';

function Newsletter() {
  const { handleSubmit, handleChange, values, errors, touched, isSubmitting } = useFormik({
    initialValues: {
      email: '',
      name: ''
    },
    onSubmit: async ({ email, name }, { resetForm }) => {
      await fetch('/api/newsletter', {
        body: JSON.stringify({ email, name }),
        method: 'post'
      });
      resetForm();
      alert('Cadastrado com sucesso!');
    },
    validate: async ({ email, name }) => {
      const errors = {};
      if (!name) {
        errors.name = "Informe seu nome"
      }

      if (!email) {
        errors.email = "Informe seu e-mail"
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.email = "Esse não parece um e-mail válido"
      }

      return errors;
    }
  })

  return (
    <div className="footer__newsletter">
      <div className="newsletter__container">
        <div className="newsletter__text">
          <img src="/images/envelope.png" alt="carta" />
          <span>
            Cadastre-se e receba descontos e
            {' '}
            <strong className="txt-yellow">ofertas exclusivas</strong>
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
            <button className="yellow-button" type="submit">
              {
                isSubmitting
                  ? <span>
                    <i className="fa fa-spin fa-spinner"></i>
                  </span>
                  : <img src="/images/braskape_logo-aviao.png" alt="avião" />
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
