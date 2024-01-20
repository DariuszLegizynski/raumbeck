import "./Prices.css"

import { useState } from "react"

const PriceCard = ({ time, handlePriceChange }) => {
	return (
		<section className="prices__card" onClick={handlePriceChange}>
			<section>
				<p>{time} Min</p>
				<p>lange Physiotherapie</p>
			</section>
			<section>
				<p>Eine kurze und nette Beschreibung</p>
			</section>
		</section>
	)
}

const SummaryCard = ({ time, price }) => {
	return (
		<section className="prices__card-summary">
			<p>Preis:</p>
			<section>
				<section>
					<h2>{price} €</h2>
					<p>Einmalige Zahlung</p>
				</section>
				<section>
					<li>
						<ul>{time} Min</ul>
						<ul>Weshalb es sich Lohnt</ul>
						<ul>Weshalb es sich Lohnt</ul>
						<ul>Weshalb es sich Lohnt</ul>
						<ul>Durchschnittliche Kostenrückerstattung: 27 €</ul>
					</li>
				</section>
			</section>
		</section>
	)
}

const Prices = () => {
	const [ price, setPrice ] = useState(false)

	return (
		<article className="prices">
			<section>
				<h2>Preise</h2>
				<p>Wählen Sie ein Tarif:</p>
			</section>
			<section>
        <div onClick={() => setPrice(false)}>
        <PriceCard
					time={30}
				/>
        </div>
        <div onClick={() => setPrice(true)}>
        <PriceCard
					time={45}
				/>
        </div>
				{price ? (
					<SummaryCard
						time={30}
						price={55}
					/>
				) : (
					<SummaryCard
						time={45}
						price={80}
					/>
				)}
			</section>
		</article>
	)
}

export default Prices
