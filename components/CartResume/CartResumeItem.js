export default function CartResumeItem({ item }) {
	return (
		<li className="items__item">
			<button className="item__delete">
				<img src="/images/remove-cart.svg" alt="X" />
			</button>
			<img
				className="item__image"
				src={item.image}
				alt="produto" />
			<span className="item__name">
				{item.name}
			</span>
			<div className="item__values">
				<span className="values__qtd">{item.quantity} x</span>
				<span className="values__price">{item.price}</span>
			</div>
		</li>
	);
}
