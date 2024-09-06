import ReasonCard from "../../components/ReasonCard/ReasonCard"
import "./Reasons.css"

const Reasons = () => {
	const cardList = [
		{
			id: 1,
			image: "urinaryIncontinence",
			category: "Harninkontinenz",
			reasons: [
				"Harn- oder Stuhlverlust",
				"Blasen-, Gebärmutter-, Darmsenkung",
				"Häufiges Harnlassen, ",
				"Schwierigkeiten: Harnlassen,",
				"Stuhlgang, Harnverlust",
			],
		},
		{
			id: 2,
			image: "postOp",
			category: "Postoperative Versorgung",
			reasons: ["Gebärmutterentfernung", "Senkungsoperationen", "Prostataentfernung", "Neoblaseanlage", "Darmoperation", "Stoma Rück OP"],
		},
		{
			id: 3,
			image: "pregnancy",
			category: "Schwangerschaft und Wochenbett",
			reasons: ["Schwangerschaftsbeschwerden", "Rückbildung nach der Schwangerschaft"],
		},
		{
			id: 4,
			image: "sexual-health",
			category: "Sexuelle Gesundheit",
			reasons: ["Schmerzen beim Geschlechtsverkehr", "Vulvodynie", "Chronische Schmerzen: Geschlechtsorgane"],
		},
	]

	const renderedListOfReasonCards = cardList.map(card => {
		return <ReasonCard key={card.id} title={card.category} reasonList={card.reasons} image={card.image} />
	})

	return (
		<article className="reasons">
			<section className="reasons__title">
				<div className="reasons__title__short">
					<h2 className="green">Behandlungs-</h2>
					<h2 className="green">bereiche</h2>
					<div className="hr-line" />
				</div>
				<h2 className="green">Behandlungsbereiche</h2>
				<div className="hr-line" />
				<p>Sie sind bei mir richtig, wenn Sie folgende Beschwerden haben, da ich auf deren Behandlung spezialisiert bin:</p>
			</section>
			<section className="reasons__cards">{renderedListOfReasonCards}</section>
		</article>
	)
}

export default Reasons
