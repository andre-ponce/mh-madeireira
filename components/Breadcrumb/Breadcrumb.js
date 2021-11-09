import React from 'react';
import Link from 'next/link';

function Breadcrumb({ path, classPrefix }) {
  return (
    <nav className="container_serie-ds">
      <ul className={`main__breadcrumb ${classPrefix}__breadcrumb`}>
        <li>
          <Link href='/' passHref>
            <a>HOME</a>
          </Link>
        </li>
        {
          path.map((item, index) => (
            <>
              <li className="breadcrumb__icon">
                <i className="fas fa-chevron-right" />
              </li>
              <li>
                <Link href={item.slug} passHref>
                  <a>
                    {
                      index < path.length - 1
                        ? <>{item.nome.toUpperCase()}</>
                        : <h1>{item.nome.toUpperCase()}</h1>
                    }
                  </a>
                </Link>
              </li>
            </>
          ))
        }
      </ul>
    </nav>
  );
}

export default Breadcrumb;
