import { ResumeItem } from './ResumeItem';

export function ResumeItens({ items }) {
  return (
    <div className="checkout-resume--itens">
      {items.map((item) => <ResumeItem key={item.id} {...item} />)}
    </div>
  );
}
