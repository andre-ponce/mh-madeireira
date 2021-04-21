import React from 'react';
import CenterBanner from './CenterBanner';
import Highlights from './Highlights';
import MostWanted from './MostWanted';

function Main() {
  return (
    <main className="main">
      <MostWanted />
      <CenterBanner />
      <Highlights />
    </main>
  );
}

export default Main;
