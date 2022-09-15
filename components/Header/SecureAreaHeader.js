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
        <div className="container_serie-ds">
          <Link href="/" passHref>
            <a href className="logo">
              <img className="logo__img" src="/images/logo_img.png" alt="Logo" />
              <h1 className="d-none">{nomeFantasia.toUpperCase()}</h1>
            </a>
          </Link>
          <img className="simple-topbar__site-seguro-img" src="/images/site_seguro.png" alt="Site 100% Seguro" />
        </div>
      </header>
    </>
  )
}
