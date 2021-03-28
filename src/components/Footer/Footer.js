import React from 'react';
import Central from './Central';
import Info from './Info';
import Newsletter from './Newsletter';
import Whatsapp from './Whatsapp';

function Footer() {
  return (
    <footer className="footer">
      <Whatsapp />
      <Newsletter />
      <Central />
      <Info />
    </footer>
  );
}

export default Footer;
