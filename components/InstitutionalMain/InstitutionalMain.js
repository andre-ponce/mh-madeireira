function InstitutionalMain({ titulo, conteudo }) {
  return (
    <main className="main intitutional">
      <section className="container_serie-ds">
        <h2 className="page-title">{titulo}</h2>
        <div className="intitutional__content" dangerouslySetInnerHTML={{ __html: conteudo }} />
      </section>
    </main>
  );
}

export default InstitutionalMain;
