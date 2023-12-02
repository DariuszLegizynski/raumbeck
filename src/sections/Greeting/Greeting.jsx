import therapy from "../../assets/images/Homepage1.jpg"

import "./Greeting.css"

const Greeting = () => {

	return (
    <section className="greeting">
      <hr />
      <p className='greeting__first'>Ich freue mich über Ihr Interesse an meiner therapeutischen Arbeit.</p>
      <p className='greeting__second'>
        Mein Kerngebiet ist die <b>physiotherapeutische</b> Behandlung im <b>gynäkologischen</b>, <b>urologischen</b> und <b>proktologischen</b> Bereich.
      </p>
      <p className='greeting__third'>Mir liegen dabei eine fachkompetente Betreuung sowie großes Einfühlungsvermögen am Herzen.</p>
    </section>
	)
}

export default Greeting
