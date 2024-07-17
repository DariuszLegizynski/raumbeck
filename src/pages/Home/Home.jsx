import { Helmet } from "react-helmet"

import Hero from "../../sections/Hero/Hero"
import Process from "../../sections/Process/Process"
import "./Home.css"
import Contact from "../../sections/Contact/Contact"
import TherapyMethods from "../../sections/TherapyMethods/TherapyMethods"
import Reasons from "../../sections/Reasons/Reasons"

import Greeting from "../../sections/Greeting/Greeting"

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Startseite - Anna Mehr</title>
				<meta
					name="description"
					content="Willkommen bei Anna Mehr, Ihrer vertrauenswürdigen Physiotherapeutin in Wiener Neustadt. Ich biete personalisierte Behandlungspläne zur Genesung von Verletzungen, Schmerzlinderung und Verbesserung der Mobilität. Vereinbaren Sie noch heute einen Termin!"
				/>
			</Helmet>
			<article className="home">
				<Hero />
				<Greeting />
				<Reasons />
				<Process />
				<TherapyMethods />
				<Contact />
			</article>
		</>
	)
}

export default Home
