import React from 'react';
import Brands from './Brands';
import CenterBanner from './CenterBanner';
import Highlights from './Highlights';
import MostWanted from './MostWanted';

function Main() {
  return (
    <main className="main">
      <MostWanted />
      <CenterBanner />
      <Highlights />
      <Brands />
    </main>
  );
}

export default Main;
