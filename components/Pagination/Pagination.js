import React from 'react';

function Pagination() {
  return (
    <ul className="gallery__pagination">
      <li className="pagination__page">
        <i className="fas fa-chevron-left" />
      </li>
      <li className="pagination__page">
        1
      </li>
      <li className="pagination__page">
        2
      </li>
      <li className="pagination__page">
        3
      </li>
      <li className="pagination__page">
        <i className="fas fa-chevron-right" />
      </li>
    </ul>
  );
}

export default Pagination;
