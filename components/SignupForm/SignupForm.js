import { Formik, Form } from 'formik';
import { useState } from 'react';
import { isEmpty } from 'lodash';
import { format } from '@/helpers';
import { newUserSchema, userSchema } from './SignupSchema';
import { AdressFormSection } from './AdressFormSection';
import { AccessDataFormSection } from './AccessDataFormSection';
import { BusinessDataFormSection } from './BusinessDataFormSection';
import { PersonalDataFormSection } from './PersonalDataFormSection';
import { ContactFormSection } from './ContactFormSection';

export default function SignupForm({ user, onSubmit }) {
  const [errors, setErrors] = useState([]);

  async function submit(values, { setSubmitting }) {
    const { dataNascimento, ...body } = values;
    if (dataNascimento) {
      const [d, m, y] = dataNascimento.split('/').map((x) => parseInt(x, 10));
      body.dataNascimento = new Date(y, m - 1, d);
    }

    const res = await onSubmit(body);
    if (!res.sucesso) {
      setSubmitting(false);
      setErrors(res.erros);
    }
  }

  const initialValues = {
    ...user,
    dataNascimento: user.dataNascimento
      ? format.date(new Date(user.dataNascimento))
      : '',
  };

  const schema = user !== null
    ? userSchema
    : userSchema.concat(newUserSchema);

  return (
    <main className="main main-cadastro app-container">
      <h2 className="page-title">{user.id ? 'Minha conta' : 'Criar nova conta'}</h2>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={submit}>
        {({ values, errors: formErros }) => (
          <Form className="main__form">
            {!user.id && <AccessDataFormSection />}
            {values.tipo && values.tipo.toLowerCase() === 'j' && <BusinessDataFormSection />}
            {values.tipo && values.tipo.toLowerCase() === 'f' && <PersonalDataFormSection />}
            <AdressFormSection />
            <ContactFormSection />
            {
              !isEmpty([...errors, ...Object.values(formErros)]) && (
                <div className="errors">
                  {[...errors, ...Object.values(formErros)].map((error) => <div className="errors--message">{error}</div>)}
                </div>
              )
            }
          </Form>
        )}
      </Formik>
    </main>
  );
}
