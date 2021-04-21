import React from 'react';
import CenterBanner from './CenterBanner';
import MostWanted from './MostWanted';

function Main() {
  return (
    <main className="main">
      <MostWanted />
      <CenterBanner />
    </main>
  );
}

export default Main;
