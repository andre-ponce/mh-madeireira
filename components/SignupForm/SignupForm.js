import { Formik, Form } from 'formik';
import { useState } from 'react';
import { isEmpty } from 'lodash';
import { userSchema } from './SignupSchema';
import { AdressFormSection } from './AdressFormSection';
import { AccessDataFormSection } from './AccessDataFormSection';
import { BusinessDataFormSection } from './BusinessDataFormSection';
import { PersonalDataFormSection } from './PersonalDataFormSection';
import { ContactFormSection } from './ContactFormSection';

export default function SignupForm({ user, onSubmit }) {
  const [errors, setErrors] = useState([]);
  async function submit(values, { setSubmitting }) {
    const res = await onSubmit(values);
    if (!res.sucesso) {
      setSubmitting(false);
      setErrors(res.erros);
    }
  }

  const initialValues = {
    ...user,
    dataNascimento: user.dataNascimento
      ? new Date(user.dataNascimento).toISOString().split('T')[0]
      : null,
  };

  return (
    <main className="main main-cadastro container_serie-ds">
      <h2 className="page-title">{user.id ? 'Minha conta' : 'Criar nova conta'}</h2>
      <Formik initialValues={initialValues} validationSchema={userSchema} onSubmit={submit}>
        {({ values }) => (
          <Form className="main__form">
            {!user.id && <AccessDataFormSection />}
            {values.tipo && values.tipo.toLowerCase() === 'j' && <BusinessDataFormSection />}
            {values.tipo && values.tipo.toLowerCase() === 'f' && <PersonalDataFormSection />}
            <AdressFormSection />
            <ContactFormSection />
            {
              !isEmpty(errors) && (
                <div className="errors">
                  {errors.map((error) => <div className="errors--message">{error}</div>)}
                </div>
              )
            }
          </Form>
        )}
      </Formik>
    </main>
  );
}
