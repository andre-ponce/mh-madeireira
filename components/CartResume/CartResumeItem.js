export default function CartResumeItem({ item, onChange, decrement, increment, remove }) {
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


        <span className="item__control">
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
          <input
            type="number"
            step={1}
            min={1}
            value={item.quantity}
            onChange={(evt) => onChange(item, evt.target.value)}
          />
          <button
            className="item__increment"
            onClick={() => increment(item)}
          >
            <i className="far fa-chevron-up"></i>
          </button>
        </span>
        <span>
          <span className="values__qtd">{item.quantity} x</span>
          <span className="values__price">{item.price}</span>
        </span>
      </div>
    </li>
  );
}
