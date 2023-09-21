import ReasonCard from '../../components/ReasonCard/ReasonCard'
import "./Reasons.css"

const Reasons = () => {
	
  const cardList = [
    {
      id:1,
      category: "Urinary Incontinence",
      reasons: [
          "Harn- oder Stuhlverlust",
          "Blasen-, Gebärmutter- oder Darmsenkung",
          "Häufiges Harnlassen mit oder ohne Harnverlust",
          "Schwierigkeiten beim Harnlassen oder Stuhlgang"
      ]
    },
    {
      id:2,
      category: "Surgical Procedures and Postoperative Care",
      reasons: [
          "Gebärmutterentfernung sowie Senkungsoperationen",
          "Vor- und/oder Nachbetreuung bei Prostataentfernung bzw. Anlage einer Neoblase",
          "Vor- und/oder Nachbetreuung bei Darmoperationen bzw. Stoma Rück OP",
      ]
    },
    {
      id:3,
      category: "Pregnancy and Postpartum",
      reasons: [
        "Schwangerschaftsbeschwerden sowie Rückbildung nach der Schwangerschaft",
        "Vor- und/oder Nachbetreuung bei Prostataentfernung bzw. Anlage einer Neoblase",
        "Vor- und/oder Nachbetreuung bei Darmoperationen bzw. Stoma Rück OP",
        ]
    },
    {
      id:4,
      category: "Sexual Health",
      reasons: [
        "Schmerzen beim Geschlechtsverkehr ",
        "Vulvodynie, chronische Schmerzen im Bereich der äußeren Geschlechtsorgane",
      ]
    }
  ]

    const renderedListOfReasonCards = cardList.map(card => {
      return (
        <ReasonCard key={card.id} title={card.category} reasonList={card.reasons} />
      )
    })

	return (
		<article className="reasons">
      <section className="reasons__title">
        <h1>Behandlungsbereiche</h1>
        <div className="hr-line" />
        <p>Sie sind bei mir richtig, wenn Sie folgende Beschwerden haben, da ich auf deren Behandlung spezialisiert bin:</p>
      </section>
			<section className="reasons__card">
				{renderedListOfReasonCards}
			</section>
		</article>
	)
}

export default Reasons
