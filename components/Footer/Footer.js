import React, { useContext } from 'react';
import GlobalDataContext from '../../contexts/GlobalDataContext';
import { format } from '../../helpers';
import Central from './Central';
import Info from './Info';
import Newsletter from './Newsletter';
import Whatsapp from './Whatsapp';

function Footer({ pages, hideNewsletter, hideWhatsapp }) {
  const {
    institucional: {
      whatsapp,
      telefone,
      cnpj,
      emailAtendimento,
      facebook,
      instagram,
      youtube,
      nomeFantasia,
    },
    site: {
      informacoesDeAtendimento,
    },
  } = useContext(GlobalDataContext);

  const televendas = telefone || whatsapp;

  return (
    <footer className="footer">
      {!hideWhatsapp && <Whatsapp whatsapp={whatsapp} />}
      {!hideNewsletter && <Newsletter />}
      <Central
        pages={pages}
        informacoesDeAtendimento={informacoesDeAtendimento}
        supportPhone={format.telephone(televendas)}
        supportEmail={emailAtendimento}
        facebook={facebook}
        instagram={instagram}
        youtube={youtube}
      />
      <Info document={cnpj} storeName={nomeFantasia} />
    </footer>
  );
}

export default Footer;
