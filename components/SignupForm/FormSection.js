export function FormSection({ name, children }) {
  return (
    <section>
      <h3 className="title-border-left">{name}</h3>
      <div className="form-row">
        {children}
      </div>
    </section>
  );
}
