export function AccountSection({ title, subtitle, children }) {
    return (
        <>
            <div className="account-section__title">{title}</div>
            <div className="account-section__subtitle">{subtitle}</div>
            <div className="form-row">
                {children}
            </div>
        </>
    );
}
