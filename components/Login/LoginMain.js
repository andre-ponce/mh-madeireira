import { useRouter } from 'next/router';
import { LoginBox } from './LoginBox';
import { SignupBox } from './SignupBox';

export default function LoginMain({ returnUrl }) {
  const router = useRouter();

  const signup = (user) => {
    router.push({
      pathname: '/criar-conta',
      query: { ...user, returnUrl },
    });
  };

  const doLogin = async (user, pass) => {
    const res = await fetch('/api/auth', {
      method: 'post',
      body: JSON.stringify({
        user, pass,
      }),
    });

    const json = await res.json();

    return {
      ...json,
      next: () => {
        router.replace(returnUrl);
      },
    };
  };

  return (
    <main className="main main-login app-container d-flex row">
      <h2 className="page-title">Faça seu login para continuar</h2>
      <LoginBox doLogin={doLogin} />
      <SignupBox signup={signup} />
    </main>
  );
}
