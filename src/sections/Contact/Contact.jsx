import IconItem from "../../assets/icons/icons"
import "./Contact.css"

const Contact = () => {
	return (
		<div className="contact__bg">
			<article className="contact" id="contact">
				<section className="contact__text">
					<h2 className="green">Kontakt</h2>
					<div className="hr-line" />
					<p>Die Praxis liegt zentral im Zentrum von Wiener Neustadt am Ferdinand-Porsche-Ring Nr.&nbsp;7/Top&nbsp;1.</p>
					<p>Parkmöglichkeiten sind direkt vor dem Gebäude in den umliegenden Kurzparkzonen oder in einem der naheliegenden Parkhäuser vorhanden.</p>
					<p>
						Es stehen für Sie ein Warteraum, eine Kaffeeküche, 2 moderne Behandlungsräume und ein großzügiger Trainingsraum mit allen wichtigen Trainingsgeräten
						zur Verfügung.
					</p>
					<p>Ich freue mich über Ihre Kontaktaufnahme.</p>
				</section>
				<section>
					<ul className="contact__list">
						<li className="contact__list__item">
							<IconItem type="phone" width="1.8rem" height="1.8rem" fillColor="none" />
							<a href="tel:068110494841">0681 / 104 94 841</a>
						</li>
						<li className="contact__list__item">
							<IconItem type="email" width="1.8rem" height="1.8rem" fillColor="none" />
							<a href="mailto:info@beckenraum.at">info@beckenraum.at</a>
						</li>
						<li className="contact__list__item">
							<IconItem type="home" width="1.8rem" height="1.8rem" fillColor="none" />
							<p>Ferdinand-Porsche-Ring 7 / Top 1</p>
						</li>
						<li className="contact__list__item">
							<b>&nbsp;</b>
							<p>A-2700 Wiener Neustadt</p>
						</li>
						<li className="contact__list__item">
							<IconItem type="location" width="1.8rem" height="1.8rem" fillColor="none" />
							<a href="https://goo.gl/maps/L47fTuhFUsojYWn19">Auf Google Maps Öffnen</a>
						</li>
					</ul>
					<form className="contact__form">
						<div className="contact__form__item">
							<input type="text" placeholder="Name" required />
						</div>
						<div className="contact__form__item">
							<input type="email" placeholder="E-mail" required />
						</div>
						<div className="contact__form__item">
							<input type="number" placeholder="Telefon" />
						</div>
						<div className="contact__form__item">
							<textarea placeholder="Nachricht" required />
						</div>
						<button className="btn btn--highlight">Senden</button>
					</form>
				</section>
			</article>
		</div>
	)
}

export default Contact
