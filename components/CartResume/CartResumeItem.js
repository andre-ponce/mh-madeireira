import { format } from '../../helpers'

export default function CartResumeItem(prop) {
  const { item } = prop;

  return (
    <li className="items__item">
      <img
        className="item__image"
        src={item.image}
        alt="produto" />
      <span className="item__name">
        {item.name}
      </span>
      <div className="item__values">
        <QuantityPanel {...prop} />
        <span className="values__block">
          <span className="values__qtd">{item.quantity} x {format.currency(item.unityPrice)}</span>
          <span className="values__price">{format.currency(item.quantity * item.unityPrice)}</span>
        </span>
      </div>
    </li>
  );
}

function QuantityPanel({ item, setValue, decrement, increment, remove }) {
  return <span className="item__control">

    <button className="item__delete" onClick={() => remove(item)}>
      <i className="far fa-times"></i>
    </button>

    <button
      className="item__decrement"
      onClick={() => decrement(item)}
      disabled={item.quantity < 2}
    >
      <i className="far fa-chevron-down"></i>
    </button>

    <input type="number" step={1} min={1} value={item.quantity}
      onChange={(evt) => setValue(item, evt.target.value)} />

    <button className="item__increment" onClick={() => increment(item)}>
      <i className="far fa-chevron-up"></i>
    </button>
  </span>;
}
