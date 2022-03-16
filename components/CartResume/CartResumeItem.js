import { format } from '../../helpers'; import { CartQuantityPanel } from './CartQuantityPanel';

export default function CartResumeItem(prop) {
  const { item } = prop;

  return (
    <li className="items__item">
      <img
        className="item__image"
        src={item.image}
        alt="produto"
      />
      <span className="item__name">
        {item.name}
      </span>
      <div className="item__values">
        <CartQuantityPanel {...prop} />
        <span className="values__block">
          <span className="values__qtd">
            {item.quantity}
            {' '}
            x
            {format.currency(item.unityPrice)}
          </span>
          <span className="values__price">{format.currency(item.quantity * item.unityPrice)}</span>
        </span>
      </div>
    </li>
  );
}
