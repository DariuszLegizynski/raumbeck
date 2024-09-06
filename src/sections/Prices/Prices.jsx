import IconItem from "../../assets/icons/icons"
import "./Prices.css"

const SummaryCard = ({ time, price, priceReturn }) => {
	return (
		<section className="prices__card-summary">
			<section className="prices__card-summary__body">
				<div className="prices__card-summary__icon">
					<IconItem type="exercise_long" width="2rem" height="2rem" fillColor="none" strokeColor="hsl(85, 55%, 51%)" />
				</div>
				<p>Preis:</p>
				<section>
					<h3>{price} €</h3>
					<p>Einmalige Zahlung</p>
				</section>
				<li className="prices__card-summary__list">
					<ul>
						<h3>{time} Min</h3>
					</ul>
					<ul>
						<IconItem type="check_circle" width="1rem" height="1rem" fillColor="none" />
						<p>Weshalb es sich Lohnt</p>
					</ul>
					<ul>
						<IconItem type="check_circle" width="1rem" height="1rem" fillColor="none" />
						<p>Weshalb es sich Lohnt</p>
					</ul>
					<ul>
						<IconItem type="check_circle" width="1rem" height="1rem" fillColor="none" />
						<p>Weshalb es sich Lohnt</p>
					</ul>
					<ul>
						<p>Durchschnittliche Kostenrückerstattung: {priceReturn}&nbsp;€</p>
					</ul>
				</li>
			</section>
		</section>
	)
}

const Prices = () => {
	return (
		<article className="prices">
			<section className="prices__title">
				<h2 className="green">Preis</h2>
				<div className="hr-line-green"></div>
			</section>

			<section className="prices__wrapper">
				<div className={`summary-card visible`}>
					<SummaryCard time={45} price={80} priceReturn={41} />
				</div>
			</section>
			<section className="prices__cancel">
				<h3>Therapieabsage</h3>
				<p>
					Sollten Sie einen Termin nicht wahrnehmen können, geben Sie bitte möglichst frühzeitig Bescheid. Somit kann Patienten mit akuten Beschwerden auch
					kurzfristig eine Therapieeinheit ermöglicht werden. Termine, die später als 24 Stunden vor Therapiebeginn abgesagt werden, müssen in Rechnung gestellt
					werden.
				</p>
			</section>
		</article>
	)
}

export default Prices
