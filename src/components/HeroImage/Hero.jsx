import talkPatient from "../../assets/images/AboutMe.jpg"

import "./Hero.css"

const Hero = () => {
	return (
		<section className="hero">
			<img src={talkPatient} />
			<text>
				<h1>Anna Mehr</h1>
        <p>--- Physiotherapeutin</p>
				<span>Ich freue mich über Ihr Interesse an meiner therapeutischen Arbeit.</span>
				<span>Mein Kerngebiet ist die physiotherapeutische Behandlung im gynäkologischen, urologischen und proktologischen Bereich.</span>
				<span>Mir liegen dabei eine fachkompetente Betreuung sowie großes Einfühlungsvermögen am Herzen.</span>
			</text>
		</section>
	)
}

export default Hero
