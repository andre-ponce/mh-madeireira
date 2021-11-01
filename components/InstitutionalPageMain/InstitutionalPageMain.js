import { useEffect } from 'react';
import style from './InstitutionalPageMain.module.scss';

function InstitutionalPageMain({
  titulo,
  conteudo,
  scripts
}) {
  return (
    <main className={style.main}>
      <section className="container_serie-ds">
        <h2 className="page-title">{titulo}</h2>
        <div className={style.content} dangerouslySetInnerHTML={{__html: conteudo}} />
      </section>
    </main>
  );
}

export default InstitutionalPageMain;