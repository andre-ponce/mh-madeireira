export function ProductDescription({ rawHtml }) {
  return (
    <section className="product__description">
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </section>
  );
}
