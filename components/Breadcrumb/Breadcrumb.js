import React, { Fragment } from 'react';
import Link from 'next/link';

function Breadcrumb({ path }) {
  return (
    <nav className="container_serie-ds">
      <ul className="main__breadcrumb">
        <li>
          <Link href="/">HOME</Link>
        </li>
        {
          path.map((item, index) => (
            <Fragment key={item.slug}>
              <li className="breadcrumb__icon">
                <i className="fa-solid fa-chevron-right" style={{ fontSize: '20px' }} />
              </li>
              <li>
                <Link href={item.slug} passHref>
                  <a href>
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
