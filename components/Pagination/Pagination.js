import React from 'react';
import { PaginationItem } from './PaginationItem';

function Pagination({
  currentPage,
  isLastPage,
  nextHref,
  prevHref,
}) {
  return (
    <div className="gallery__pagination">
      <PaginationItem text="< Página Anterior" href={currentPage < 2 ? '' : prevHref} />
      <PaginationItem text="Próxima Página >" href={isLastPage ? '' : nextHref} />
    </div>
  );
}

export default Pagination;
