function HelpInfo({ emailAtendimento, telefone, whatsapp }) {
  return (
    <div className="help">
      <img src="/images/help.svg" alt="Ajuda" />
      <span>Ajuda</span>
      <div className="block_hover">
        {emailAtendimento && <span>{emailAtendimento}</span>}
        {telefone && <span>{telefone}</span>}
        {whatsapp && <span>{whatsapp}</span>}
      </div>
    </div>
  );
}

export default HelpInfo;
