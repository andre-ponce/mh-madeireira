import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import UserLoggedContext from '../../contexts/UserLoggedContext';
import { MobileWrapper } from './MobileWrapper';
import { NotMobileWrapper } from './NotMobileWrapper';

export default function UserTag({ isMobile }) {
  const user = useContext(UserLoggedContext);
  const Wrapper = isMobile ? MobileWrapper : NotMobileWrapper;

  return (
    <Wrapper>
      {
        user.loggedIn
          ? (
            <>
              <span className="login__container d-flex align-items-center">
                <span className="tag_image">
                  <Image src="/images/login.svg" alt="Login" width="30px" height="30px" />
                </span>
                <span className="d-flex flex-column">
                  <span>Olá, Fulano</span>
                  <span className="login__account">
                    Minha conta
                    {' '}
                    <i className="fal fa-chevron-down" />
                  </span>
                </span>
              </span>
              <span className="block_hover">
                <Link href="/minha-conta">Minha conta</Link>
                <Link href="/meus-pedidos">Meus pedidos</Link>
                <Link href="/logout">Sair</Link>
              </span>
            </>
          )
          : (
            <>
              <Link href="/login" passHref>
                <a className="login__container d-flex align-items-center">
                  <span className="tag_image">
                    <Image src="/images/login.svg" alt="Login" width="30px" height="30px" />
                  </span>
                  <div className="d-flex flex-column">
                    <span>Entre ou</span>
                    <span>Cadastre-se</span>
                  </div>
                </a>
              </Link>
            </>
          )
      }
    </Wrapper>
  );
}
