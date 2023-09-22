function InstitutionalMain({ conteudo }) {
  return (
    <main className="main intitutional">
      <section className="app-container">
        <div className="intitutional__content" dangerouslySetInnerHTML={{ __html: conteudo }} />
      </section>
    </main>
  );
}

export default InstitutionalMain;
