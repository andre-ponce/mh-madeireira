import { Help } from '../Icons/Help';

function HelpInfo({ emailAtendimento, telefone, whatsapp }) {
  return (
    <div className="help">
      <span className="tag_image">
        <Help />
      </span>
      <span>Ajuda</span>
      <div className="hover_wrap">
        <div className="block_hover">
          {emailAtendimento && <span>{emailAtendimento}</span>}
          {telefone && <span>{telefone}</span>}
          {whatsapp && <span>{whatsapp}</span>}
        </div>
      </div>
    </div>
  );
}

export default HelpInfo;
