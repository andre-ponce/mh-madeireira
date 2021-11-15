import { linkTo } from '../../helpers';

function Whatsapp({ whatsapp }) {
  const href = linkTo.whatsappApi(whatsapp);
  return href
    ? (
      <div className="footer__whats-fixed">
        <a href={href} target="_blank" title="WHATSAPP" rel="noreferrer">
          <img src="/images/whats_fixed.png" alt="whats fixo" />
        </a>
      </div>
    )
    : <></>;
}

export default Whatsapp;
