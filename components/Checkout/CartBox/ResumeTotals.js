export function ResumeTotals() {
  return (
    <div className="checkout-resume--totals">
      <div className="totals--detailed">
        <div className="totals--detailed-item">
          <span className="totals--detailed-title">SUBTOTAL:</span>
          <span className="totals--detailed-value">R$999,99</span>
        </div>
        <div className="totals--detailed-item">
          <span className="totals--detailed-title">FRETE:</span>
          <span className="totals--detailed-value">R$999,99</span>
        </div>
        <div className="totals--detailed-item">
          <span className="totals--detailed-title">CUPOM:</span>
          <span className="totals--detailed-value">R$999,99</span>
        </div>
        <div className="totals--detailed-item">
          <span className="totals--detailed-title">DESCONTO:</span>
          <span className="totals--detailed-value">R$999,99</span>
        </div>
        <div className="totals--detailed-item">
          <span className="totals--detailed-title">JUROS:</span>
          <span className="totals--detailed-value">R$999,99</span>
        </div>
      </div>
      <div className="totals--final">
        <span className="totals--final-title">TOTAL:</span>
        <span className="totals--final-value">R$999,99</span>
      </div>
    </div>
  );
}
