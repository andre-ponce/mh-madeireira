import style from './InstitutionalMain.module.scss';

function InstitutionalMain({ titulo, conteudo }) {
  return (
    <main className={style.main}>
      <section className="container_serie-ds">
        <h2 className="page-title">{titulo}</h2>
        <div className={style.content} dangerouslySetInnerHTML={{__html: conteudo}} />
      </section>
    </main>
  );
}

export default InstitutionalMain;