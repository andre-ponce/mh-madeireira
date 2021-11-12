import React from 'react';
import Central from './Central';
import Info from './Info';
import Newsletter from './Newsletter';
import Whatsapp from './Whatsapp';

function Footer({pages}) {
  return (
    <footer className="footer">
      <Whatsapp />
      <Newsletter />
      <Central pages={pages} />
      <Info />
    </footer>
  );
}

export default Footer;
