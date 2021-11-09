export function ProductDescription({ rawHtml }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }}></div>
    </>
  );
}
