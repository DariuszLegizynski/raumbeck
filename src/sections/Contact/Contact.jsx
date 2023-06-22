import "./Contact.css"

const Contact = () => {
	return (
		<article className="contact">
			<section className="contact__text">
      <h1>Kontakt</h1>
      <div className="hr-line" />
			<p>Die Praxis liegt zentral im Zentrum von Wiener Neustadt am Ferdinand-Porsche-Ring Nr. 7/Top 1.</p>
			<p>Parkmöglichkeiten sind direkt vor dem Gebäude in den umliegenden Kurzparkzonen oder in einem der naheliegenden Parkhäuser vorhanden.</p>
			<p>
				Es stehen für Sie ein Warteraum, eine Kaffeeküche, 2 moderne Behandlungsräume und ein großzügiger Trainingsraum mit allen wichtigen Trainingsgeräten zur
				Verfügung.
			</p>
			<p>Ich freue mich über Ihre Kontaktaufnahme.</p>
      </section>
			<section>
				<ul className="contact__list">
					<li><p>tel: <a>0681 / 104 94 841</a></p></li>
					<li><p>E-Mail: <a>info@beckenraum.at</a></p></li>
					<li><p>Ferdinand-Porsche-Ring Nr. 7 / Top 1</p></li>
					<li><p>A-2700 Wiener Neustadt</p></li>
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
	)
}

export default Contact
