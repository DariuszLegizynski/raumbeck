import "./Prices.css"

import { useState } from "react"
import { HashLink as Link } from "react-router-hash-link"

const PriceCard = ({ time, handlePriceChange, price }) => {
	const baseClassName = "prices__card"
	const handleActiveClass = `${baseClassName} ${price ? "isActive" : "notActive"}`

	return (
		<section
			className={handleActiveClass}
			onClick={handlePriceChange}
		>
			<section className="prices__card__body">
				<h3 style={price ? { color: "hsl(85, 55%, 51%)" } : {}}>{time} Min</h3>
				<p>Physiotherapie</p>
			</section>
			<section className="prices__card__footer">
				<p>Eine kurze und nette Beschreibung</p>
			</section>
		</section>
	)
}

const SummaryCard = ({ time, price }) => {
	return (
		<section className="prices__card-summary">
			<p>Preis:</p>
			<section className="prices__card-summary__body">
				<section>
					<h2>{price} €</h2>
					<p>Einmalige Zahlung</p>
				</section>
				<li className="prices__card-summary__list">
					<ul>
						<h3>{time} Min</h3>
					</ul>
					<ul>Weshalb es sich Lohnt</ul>
					<ul>Weshalb es sich Lohnt</ul>
					<ul>Weshalb es sich Lohnt</ul>
					<ul>Durchschnittliche Kostenrückerstattung: 27 €</ul>
				</li>
			</section>
		</section>
	)
}

const Prices = () => {
	const [price, setPrice] = useState(false)

	return (
		<article className="prices">
			<section className="prices__title">
				<h2>Preise</h2>
				<p>Wählen Sie ein Tarif:</p>
			</section>
			<section>
				<div onClick={() => setPrice(false)}>
					<PriceCard
						time={30}
						price={!price}
					/>
				</div>
				<div onClick={() => setPrice(true)}>
					<PriceCard
						time={45}
						price={price}
					/>
				</div>
				{price ? (
					<SummaryCard
						time={45}
						price={80}
					/>
				) : (
					<SummaryCard
						time={30}
						price={55}
					/>
				)}
			</section>
			<Link
				to="/#contact"
				className="btn btn--green"
			>
				Kontakt
			</Link>
		</article>
	)
}

export default Prices

