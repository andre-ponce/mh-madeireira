import Image from 'next/image';

function HelpInfo({ emailAtendimento, telefone, whatsapp }) {
  return (
    <div className="help">
      <span className='tag_image'>
        <Image src='/images/help.svg' alt="Ajuda" width="30px" height="30px" className='tag_image' />
      </span>
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
