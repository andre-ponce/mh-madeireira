import React, { useContext } from 'react';
import GlobalDataContext from '../../contexts/GlobalDataContext';
import Central from './Central';
import Info from './Info';
import Newsletter from './Newsletter';
import Whatsapp from './Whatsapp';

function Footer({pages}) {

  const {
    institucional: {
      whatsapp
    }
  } = useContext(GlobalDataContext);

  return (
    <footer className="footer">
      <Whatsapp whatsapp={whatsapp}/>
      <Newsletter />
      <Central pages={pages} />
      <Info />
    </footer>
  );
}

export default Footer;
