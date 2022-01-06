import { LoginBox } from "./LoginBox";
import { SignupBox } from "./SignupBox";

export default function LoginMain({ returnUrl }) {

  const signup = ({ email, postalCode }) => {
    console.log({ email, postalCode });
  }

  const doLogin = ({ userName, password }) => {
    console.log({ userName, password, returnUrl });
  }

  return (
    <main className="main container_serie-ds d-flex row">
      <h2 className="page-title">Faça seu login para continuar</h2>
      <LoginBox doLogin={doLogin} />
      <SignupBox signup={signup} />
    </main>
  );
}
