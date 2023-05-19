import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Breadcrumb({ path }) {
  const [containerClass, setContainerClass] = useState('');

  useEffect(() => {
    if (isMobile) {
      setContainerClass('');
    } else {
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
                <FontAwesomeIcon icon="fa-chevron-right" style={{ fontSize: '1em' }} />
              </li>
              <li>
                <Link href={item.slug}>
                  {
                    index < path.length - 1
                      ? <h3>{item.nome.toUpperCase()}</h3>
                      : <h1>{item.nome.toUpperCase()}</h1>
                  }
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
