import { connect } from 'formik';
import Link from 'next/link';
import { linkTo } from '@/helpers';
import { FieldBox } from './FieldBox';

export const NewAccountEmailField = connect(({ name, formik: { errors } }) => (
  <>
    <FieldBox inputMode="email" autoComplete="email" name={name} label="E-mail" type="email" />
    {
      errors.email === 'E-mail já cadastrado'
      && (
        <span className="recovery-account-link">
          {'Esqueceu sua senha? '}
          <Link href={linkTo.recoveryAccount()}>clique aqui para recuperar</Link>
        </span>
      )
    }
    <FieldBox inputMode="email" autoComplete="email" name={`${name}Confirmacao`} label="Repita seu E-mail" type="email" />
  </>
));
