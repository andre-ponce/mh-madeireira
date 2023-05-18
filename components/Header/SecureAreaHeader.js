import GlobalDataContext from "@/contexts/GlobalDataContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { url } from "@/services/statics.service";
import Link from "next/link";
import { useContext } from "react";

export function SecureAreaHeader() {
  const {
    institucional: {
      nomeFantasia,
    },
    site: {
      logoAccountFileName
    }
  } = useContext(GlobalDataContext);

  return (
    <>
      <header className="header__simple-topbar">
        <div className="app-container">
          <Link href="/" passHref>
            <a className="logo">
              <img className="logo__img" src={url.imageLayout(logoAccountFileName)} alt={`${nomeFantasia} Logo`} />
              <h1 className="d-none">{nomeFantasia.toUpperCase()}</h1>
            </a>
          </Link>
          <div className="secure-info">
            <FontAwesomeIcon icon="fa-lock" />
            <span>SITE 100% SEGURO</span>
          </div>
        </div>
      </header>
    </>
  )
}
