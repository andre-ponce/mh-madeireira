import React, { Fragment } from 'react';
import Link from 'next/link';

function Breadcrumb({ path }) {
  return (
    <nav className="container_serie-ds">
      <ul className="main__breadcrumb">
        <li>
          <Link href="/" passHref>
            <a>HOME</a>
          </Link>
        </li>
        {
          path.map((item, index) => (
            <Fragment key={item.slug}>
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
            </Fragment>
          ))
        }
      </ul>
    </nav>
  );
}

export default Breadcrumb;
