import Link from 'next/link';
import { useContext } from 'react';
import UserLoggedContext from '../../contexts/UserLoggedContext';

function UserInfo() {

  const user = useContext(UserLoggedContext);

  return user.loggedIn
    ? (
      <div className="login">
        <span className="login__container d-flex align-items-center">
          <img src="/images/login.svg" alt="Login" />
          <div className="d-flex flex-column">
            <span>Olá Fulano</span>
            <span>
              Minha conta
              {' '}
              <i style={{ color: '#545454' }} className="fal fa-chevron-down" />
            </span>
          </div>
        </span>
        <div className="block_hover">
          <Link href="/minha-conta">Minha conta</Link>
          <Link href="/meus-pedidos">Meus pedidos</Link>
          <Link href="/logout">Sair</Link>
        </div>
      </div>
    )
    : (
      <div className="login">
        <a href="cadastro.html" className="login__container d-flex align-items-center">
          <img src="/images/login.svg" alt="Login" />
          <div className="d-flex flex-column">
            <span>Entre ou</span>
            <span>Cadastre-se</span>
          </div>
        </a>
      </div>
    );
}

export default UserInfo;
