import IconItem from "../../assets/icons/icons"
import "./Prices.css"

import { useState } from "react"
import { HashLink as Link } from "react-router-hash-link"

const PriceCard = ({ time, handlePriceChange, price, iconEcercise }) => {
	const baseClassName = "prices__card"
	const handleActiveClass = `${baseClassName} ${price ? "isActive" : "notActive"}`

	return (
		<section
			className={handleActiveClass}
			onClick={handlePriceChange}
		>
			<div className='prices__card__exercise'>
				{iconEcercise === 'exercise_short' ? (<IconItem
					type='exercise_short'
					width="2rem"
					height="2rem"
					fillColor="none"
					strokeColor={price ? "hsl(85, 55%, 51%)" : "black"}
				/>) : null}
				{iconEcercise === 'exercise_long' ? (<IconItem
					type='exercise_long'
					width="2rem"
					height="2rem"
					fillColor="none"
					strokeColor={price ? "hsl(85, 55%, 51%)" : "black"}
				/>) : null}
			</div>
			<section className="prices__card__body">
				<div className='prices__card__exercise'>
					<IconItem
						type="check"
						width="2rem"
						height="2rem"
						fillColor="none"
						strokeColor={price ? "hsl(85, 55%, 51%)" : "black"}
					></IconItem>
					<h3 style={price ? { color: "hsl(85, 55%, 51%)" } : {}}>
						{time} Min
					</h3>
				</div>
				<p>Physiotherapie</p>
			</section>
			<section className="prices__card__footer">
				<span>Eine kurze und nette Beschreibung</span>
			</section>
		</section>
	)
}

const SummaryCard = ({ time, price, priceReturn }) => {
	return (
		<section className="prices__card-summary">
			<section className="prices__card-summary__body">
			<p>Preis:</p>
				<section>
					<h2>{price} €</h2>
					<p>Einmalige Zahlung</p>
				</section>
				<li className="prices__card-summary__list">
					<ul>
						<h3>{time} Min</h3>
					</ul>
					<ul>
            <IconItem
              type="check_circle"
              width="1rem"
              height="1rem"
              fillColor="none"
            />
            <p>Weshalb es sich Lohnt</p>
          </ul>
					<ul>
            <IconItem
              type="check_circle"
              width="1rem"
              height="1rem"
              fillColor="none"
            />
            <p>Weshalb es sich Lohnt</p>
          </ul>
					<ul>
            <IconItem
              type="check_circle"
              width="1rem"
              height="1rem"
              fillColor="none"
            />
            <p>Weshalb es sich Lohnt</p>
          </ul>
					<ul>
            <p>Durchschnittliche Kostenrückerstattung: {priceReturn}&nbsp;€</p>
          </ul>
				</li>
        <Link
          to="/#contact"
          className="btn btn--green"
        >
          Kontakt
        </Link>
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
				<div className='prices__cards'>
					<div onClick={() => setPrice(false)}>
						<PriceCard
							time={30}
							price={!price}
							iconEcercise={'exercise_short'}
						/>
					</div>
					<div onClick={() => setPrice(true)}>
						<PriceCard
							time={45}
							price={price}
							iconEcercise={'exercise_long'}
						/>
					</div>
				</div>
				{price ? (
					<SummaryCard
						time={45}
						price={80}
						priceReturn={41}
					/>
				) : (
					<SummaryCard
						time={30}
						price={55}
						priceReturn={27}
					/>
				)}
			</section>
			<section className='prices__cancel'>
				<h3>Therapieabsage</h3>
				<p>Sollten Sie einen Termin nicht wahrnehmen können, geben Sie bitte möglichst frühzeitig Bescheid. Somit kann Patienten mit akuten Beschwerden auch kurzfristig eine Therapieeinheit ermöglicht werden. Termine, die später als 24 Stunden vor Therapiebeginn abgesagt werden, müssen in Rechnung gestellt werden.</p>
			</section>
		</article>
	)
}

export default Prices

