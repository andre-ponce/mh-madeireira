import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';

function Breadcrumb({ path }) {
  const [containerClass, setContainerClass] = useState('');

  useEffect(() => {
    if (isMobile) {
      setContainerClass('');
    }
    else {
      setContainerClass('app-container');
    }
  }, [isMobile]);

  return (
    <nav className={containerClass}>
      <ul className="main__breadcrumb">
        <li>
          <Link href="/">HOME</Link>
        </li>
        {
          path.map((item, index) => (
            <Fragment key={item.slug}>
              <li className="breadcrumb__icon">
                <i className="fa-solid fa-chevron-right" style={{ fontSize: '1em' }} />
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
