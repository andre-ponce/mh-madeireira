import React from 'react';
import Link from 'next/link';

function Pagination({currentPage, isLastPage, nextHref, prevHref}) {
  return (
    // <ul >
    //   <li className="pagination__page">
    //     <i className="fas fa-chevron-left" />
    //   </li>
    //   <li className="pagination__page">
    //     1
    //   </li>
    //   <li className="pagination__page">
    //     2
    //   </li>
    //   <li className="pagination__page">
    //     3
    //   </li>
    //   <li className="pagination__page">
    //     <i className="fas fa-chevron-right" />
    //   </li>
    // </ul>
    <div className="gallery__pagination">
      {
        currentPage > 1
          ? <Link passHref={true} href={prevHref}>
            <a style={{ color: 'blue', display: 'inline-block', margin: '25px 0 ' }}>{' < '}Página Anterior</a>
          </Link>
          : <span style={{ color: '#999' }}>{' < '}Página Anterior</span>
      }
      {
        !isLastPage
          ? <Link passHref={true} href={nextHref}>
            <a style={{ color: 'blue', display: 'inline-block', margin: '25px 0 ' }}>Próxima Página {' > '}</a>
          </Link>
          : <span style={{ color: '#999' }}>Próxima Página {' > '}</span>
      }
    </div>
  );
}

export default Pagination;
