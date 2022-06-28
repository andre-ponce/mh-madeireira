export function CheckoutBox({
  title, icon, action, children,
}) {
  let tagIcon = icon;
  if (typeof icon === 'string' && /fa-/.test(icon)) {
    tagIcon = <span><i className={`fa-solid ${icon}`} /></span>;
  }

  const Icon = () => tagIcon;
  //${higlight ? 'group--active' : ''}
  return (
    <>
      <div className="group d-flex flex-column">
        <h2 className="group__title">
          <span className="group__title--icon"><Icon /></span>
          <span className="group__title--text">{title}</span>
          {action && (
            <span className="group__title--action" onClick={action.onClick}>
              {action.text}
            </span>
          )}
        </h2>
        <div className="group__content">
          {children}
        </div>
      </div>
    </>
  );
}
