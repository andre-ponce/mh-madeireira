import React from 'react';

export default function CategoryBanner({ banner, breadcrumbs }) {
  return (
    <div className="main__banner">
      <img
        src={banner.src}
        alt={banner.alt}
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-offset="300" />
      {breadcrumbs}
    </div>
  );
}
