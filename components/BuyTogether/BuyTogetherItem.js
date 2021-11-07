
export function BuyTogetherItem({ product }) {
  return (
    <div className="options__option-to-buy">
      <input type="checkbox" name="comprejunto1" id="comprejunto1" />
      <label className="label-img" for="comprejunto1">
        <img src={product.image} alt="product" />
      </label>
      <label for="comprejunto1" className="option-to-buy__infos">
        <span className="infos__name">{product.name}</span>
        <span className="infos__price">{product.price}</span>
      </label>
    </div>
  );
}
