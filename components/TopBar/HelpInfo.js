function HelpInfo({ emailAtendimento, telefone, whatsapp }) {
  return (
    <div className="help">
      <img src="/images/help.svg" alt="Ajuda" />
      <span>Ajuda</span>
      <div className="block_hover">
        <span>{emailAtendimento}</span>
        <span>{telefone}</span>
        <span>{whatsapp}</span>
      </div>
    </div>
  );
}

export default HelpInfo;
