import React, { useContext } from 'react';
import GlobalDataContext from '../../contexts/GlobalDataContext';
import { format } from '../../helpers';
import Central from './Central';
import Info from './Info';
import Newsletter from './Newsletter';
import Whatsapp from './Whatsapp';

function Footer({ pages }) {

  const {
    institucional: {
      whatsapp,
      telefone,
      cnpj,
      emailAtendimento,
      facebook,
      instagram,
      youtube,
    },
    site: {
      informacoesDeAtendimento
    }
  } = useContext(GlobalDataContext);

  return (
    <footer className="footer">
      <Whatsapp whatsapp={whatsapp} />
      <Newsletter />
      <Central
        pages={pages}
        informacoesDeAtendimento={informacoesDeAtendimento}
        supportPhone={format.telephone(telefone)}
        supportEmail={emailAtendimento}
        facebook={facebook}
        instagram={instagram}
        youtube={youtube}
      />
      <Info document={cnpj} />
    </footer>
  );
}

export default Footer;
