import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import UserLoggedContext from '@/contexts/UserLoggedContext';
import { MobileWrapper } from './MobileWrapper';
import { NotMobileWrapper } from './NotMobileWrapper';
import { linkTo } from '@/helpers';

export default function UserTag({ isMobile }) {
  const user = useContext(UserLoggedContext);
  const Wrapper = isMobile ? MobileWrapper : NotMobileWrapper;

  const { disconnected, loading, nome } = user;

  return (
    <Wrapper>
      {
        disconnected || loading
          ? (
            <>
              <Link href="/login" passHref>
                <a href className="login__container d-flex align-items-center">
                  <span className="tag_image">
                    <Image src="/images/login.svg" alt="Login" width="30px" height="30px" />
                  </span>
                  <div className="d-flex flex-column">
                    <span>Entre ou </span>
                    <span>cadastre-se</span>
                  </div>
                </a>
              </Link>
            </>
          )
          : (
            <>
              <span className="login__container d-flex align-items-center">
                <span className="tag_image">
                  <Image src="/images/login.svg" alt="Login" width="30px" height="30px" />
                </span>
                <span className="d-flex flex-column">
                  <span>Olá, {nome}</span>
                  <span className="login__account">
                    Minha conta
                    {' '}
                    <i className="fa-solid fa-chevron-down" />
                  </span>
                </span>
              </span>
              <span className="hover_wrap">
                <span className="block_hover">
                  <Link href={linkTo.account()}>Minha conta</Link>
                  <Link href={linkTo.myOrders()}>Meus pedidos</Link>
                  <Link href={linkTo.logout()}>Sair</Link>
                </span>
              </span>
            </>
          )
      }
    </Wrapper>
  );
}
