import ReasonCard from '../../components/ReasonCard/ReasonCard'
import "./Reasons.css"

const Reasons = () => {
	
  const cardList = [
    {
      id:1,
      category: "Harninkontinenz",
      reasons: [
          "Harn- oder Stuhlverlust",
          "Blasen-, Gebärmutter-, Darmsenkung",
          "Häufiges Harnlassen, ",
          "Schwierigkeiten: Harnlassen,",
          "Stuhlgang, Harnverlust"
      ]
    },
    {
      id:2,
      category: "Postoperative Versorgung",
      reasons: [
          "Gebärmutterentfernung",
          "Senkungsoperationen",
          "Prostataentfernung",
          "Neoblaseanlage",
          "Darmoperation",
          "Stoma Rück OP",
      ]
    },
    {
      id:3,
      category: "Schwangerschaft und Wochenbett",
      reasons: [
        "Schwangerschaftsbeschwerden",
        "Rückbildung nach der Schwangerschaft",
        ]
    },
    {
      id:4,
      category: "Sexuelle Gesundheit",
      reasons: [
        "Schmerzen beim Geschlechtsverkehr",
        "Vulvodynie",
        "Chronische Schmerzen: Geschlechtsorgane",
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
        <h2>Behandlungsbereiche</h2>
        <div className="hr-line" />
        <p>Sie sind bei mir richtig, wenn Sie folgende Beschwerden haben, da ich auf deren Behandlung spezialisiert bin:</p>
      </section>
			<section>
				{renderedListOfReasonCards}
			</section>
		</article>
	)
}

export default Reasons
