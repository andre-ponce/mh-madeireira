import GlobalDataContext from "@/contexts/GlobalDataContext";
import Link from "next/link";
import { useContext } from "react";

export function SecureAreaHeader() {
  const {
    institucional: {
      nomeFantasia,
    },
  } = useContext(GlobalDataContext);

  return (
    <>
      <header className="header__simple-topbar">
        <div className="app-container">
          <Link href="/" passHref>
            <a href className="logo">
              <img className="logo__img" src="/images/logo_img.png" alt="Logo" />
              <h1 className="d-none">{nomeFantasia.toUpperCase()}</h1>
            </a>
          </Link>
          <div className="secure-info">
            <i className="fa-solid fa-lock" />
            <span>SITE 100% SEGURO</span>
          </div>
        </div>
      </header>
    </>
  )
}
