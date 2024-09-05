import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { HashLink as Link } from "react-router-hash-link"
import { Helmet } from "react-helmet"

import IconItem from "../../assets/icons/icons"
import praxis from "/images/AboutMe.jpg"

import "./About.css"

const About = () => {
	const [clickedItem, setClickedItem] = useState(1)

	const handleItemClick = item => {
		setClickedItem(item)
	}

	const revealRefs = useRef([])
	revealRefs.current = []
	gsap.registerPlugin(ScrollTrigger)

	const addToRefs = el => {
		if (el && !revealRefs.current.includes(el)) {
			revealRefs.current.push(el)
		}
	}

	useEffect(() => {
		revealRefs.current.forEach(el => {
			gsap.fromTo(
				el,
				{ opacity: 0, y: "150%" },
				{
					opacity: 1,
					duration: 1,
					y: 0,

					scrollTrigger: {
						trigger: el,
						start: "top bottom",
						end: "top bottom",
					},
				}
			)
		})
	})

	const BookItem = ({ addToRef, text }) => {
		return <span ref={addToRef}>{text}</span>
	}

	const EducationItem = ({ year, text, addToRef }) => {
		return (
			<div ref={addToRef} className="about__item">
				<p>{year}</p>
				<span>{text}</span>
			</div>
		)
	}

	const JobItem = ({ year, text, addToRef }) => {
		return (
			<div ref={addToRef} className="about__item">
				<p>{year}</p>
				<span>{text}</span>
			</div>
		)
	}

	return (
		<>
			<Helmet>
				<title>Über mich - Anna Mehr</title>
				<meta
					name="description"
					content="Erfahren Sie mehr über Anna Mehr, Ihre Expertin für Physiotherapie in Wiener Neustadt. Ich biete individuelle Behandlungsansätze, um Ihre Gesundheit und Beweglichkeit zu verbessern. Entdecken Sie meine Praxis und Erfahrung als Physiotherapeutin und meine ganzheitliche Herangehensweise für Ihr Wohlbefinden."
				/>
			</Helmet>
			<article className="about">
				<h1>Über mich</h1>
				<section className="about__hero">
					<img width="300px" height="400px" src={praxis}></img>
					<div className="about__hero__me">
						<h2>Anna Mehr</h2>
						<h3>Dipl. Physiotherapeutin</h3>
						<h3>&nbsp;</h3>
						<h3>Schwerpunkt:</h3>
						<h3>Gynäkologie, Urologie & Proktologie</h3>
					</div>
				</section>
				<section className="about__body">
					<section className="about__title-mobile">
						<ul>
							<motion.li
								whileHover={{ scale: 1.1, y: 3 }}
								whileTap={{ scale: 0.9, y: 0 }}
								className="about__title-mobile__nav about__title-mobile__book"
								onClick={() => handleItemClick(1)}
							>
								<IconItem type="book" width="2rem" height="2rem" strokeColor={clickedItem === 1 ? "hsl(85, 55%, 51%)" : "#000000"} />
								{clickedItem === 1 ? <h3 style={clickedItem === 1 ? { color: "hsl(85, 55%, 51%)" } : {}}>MEINE GESCHICHTE</h3> : null}
							</motion.li>
							<motion.li
								whileHover={{ scale: 1.1, y: 3 }}
								whileTap={{ scale: 0.9, y: 0 }}
								className="about__title-mobile__nav about__title-mobile__knowledge"
								onClick={() => handleItemClick(2)}
							>
								<IconItem type="knowledge" width="2.4rem" height="2.4rem" fillColor="none" strokeColor={clickedItem === 2 ? "hsl(85, 55%, 51%)" : "#000000"} />
								{clickedItem === 2 ? <h3 style={clickedItem === 2 ? { color: "hsl(85, 55%, 51%)" } : {}}>WEITERBILDUNG</h3> : null}
							</motion.li>
							<motion.li
								whileHover={{ scale: 1.1, y: 3 }}
								whileTap={{ scale: 0.9, y: 0 }}
								className="about__title-mobile__nav about__title-mobile__job"
								onClick={() => handleItemClick(3)}
							>
								<IconItem type="job" width="2rem" height="2rem" strokeColor={clickedItem === 3 ? "hsl(85, 55%, 51%)" : "#000000"} fillColor="#000000" />
								{clickedItem === 3 ? <h3 style={clickedItem === 3 ? { color: "hsl(85, 55%, 51%)" } : {}}>BERUFLICHES</h3> : null}
							</motion.li>
						</ul>
					</section>
					<section className="about__title-desktop">
						<ul>
							<motion.li whileTap={{ scale: 0.9, y: 0 }} onClick={() => handleItemClick(1)} className="about__title-desktop__nav">
								<IconItem type="book" width="2rem" height="2rem" strokeColor={clickedItem === 1 ? "hsl(85, 55%, 51%)" : ""} />
								<h3 style={clickedItem === 1 ? { color: "hsl(85, 55%, 51%)" } : {}}>MEINE GESCHICHTE</h3>
							</motion.li>
							<motion.li whileTap={{ scale: 0.9, y: 0 }} onClick={() => handleItemClick(2)} className="about__title-desktop__nav">
								<IconItem type="knowledge" width="2.4rem" height="2.4rem" fillColor="none" strokeColor={clickedItem === 2 ? "hsl(85, 55%, 51%)" : "#000000"} />
								<h3 style={clickedItem === 2 ? { color: "hsl(85, 55%, 51%)" } : {}}>WEITERBILDUNG</h3>
							</motion.li>
							<motion.li whileTap={{ scale: 0.9, y: 0 }} onClick={() => handleItemClick(3)} className="about__title-desktop__nav">
								<IconItem type="job" width="2rem" height="2rem" strokeColor={clickedItem === 3 ? "hsl(85, 55%, 51%)" : "#000000"} fillColor="#000000" />
								<h3 style={clickedItem === 3 ? { color: "hsl(85, 55%, 51%)" } : {}}>BERUFLICHES</h3>
							</motion.li>
						</ul>
					</section>
					{clickedItem === 1 ? (
						<section className="about__book">
							<BookItem
								addToRef={addToRefs}
								text="Durch mein großes Interesse im gynäkologischen, urologischen & proktologischen Bereich begann ich mich ausgiebig für die physiotherapeutische
							Tätigkeit in diesem Zusammenhang zu beschäftigen. Dabei bekam ich die Möglichkeit, in darauf spezialisierten Praxen tätig zu sein und somit viel
							Erfahrung mit Patienten sowie im Austausch mit Arbeitskollegen und Ärzten sammeln zu dürfen. Für mich wurde das Thema zur sinnstiftenden Passion."
							/>
							<BookItem
								addToRef={addToRefs}
								text="Im Juni 2021 durfte ich durch die Geburt meines Sohnes selbst eigene Erfahrungen im Muttersein sammeln und freue mich seit August 2022 wieder als
							Physiotherapeutin tätig zu sein."
							/>
						</section>
					) : null}
					{clickedItem === 2 ? (
						<section className="about__item-list">
							<EducationItem
								addToRef={addToRefs}
								year="2017 – 2021"
								text="Physiotherapie Praxis Frauensache & Männerthemen, Schwerpunkt: Gynäkologie, Urologie & Proktologie"
							/>
							<EducationItem addToRef={addToRefs} year="2011 – 2017" text="Physiotherapie Meusburger, Schwerpunkt: Triggerpunkttherapie" />
							<EducationItem addToRef={addToRefs} year="2009 – 2017" text="Re.praxis für Physiotherapie, Schwerpunkt: Gynäkologie, Urologie & Proktologie" />
						</section>
					) : null}
					{clickedItem === 3 ? (
						<section className="about__item-list">
							<motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
								Weiterbildungen mit Schwerpunkt Beckenbodentherapie:
							</motion.h3>
							<JobItem year="Mai 2023" text="Beckenboden Special – Vulvodynie I & II" addToRef={addToRefs} />
							<JobItem year="Jänner 2023" text="Viszerale Therapie – Läsionskette Verdauungstrakt – Wirbelsäule" addToRef={addToRefs} />
							<JobItem year="November 2022" text="Beckenboden Special – Echtzeit Ultraschall in der Beckenbodentherapie beim Mann" addToRef={addToRefs} />
							<JobItem year="Oktober 2020" text="Beckenboden Special – Das hintere Kompartiment" addToRef={addToRefs} />
							<JobItem year="September 2020" text="Beckenboden Special – Vaginale Palpation Therapie" addToRef={addToRefs} />
							<JobItem year="August 2020" text="Echtzeit-Ultraschallkurs in der Beckenbodentherapie" addToRef={addToRefs} />
							<JobItem year="Dezember 2019" text="Geburt, Wochenbett, Evidenz" addToRef={addToRefs} />
							<JobItem year="Juni 2019" text="SKENAR-Technologie – Basis-Seminar" addToRef={addToRefs} />
							<JobItem year="April 2019" text="Physiotherapie bei Kindern mit anorektalen und urogenitalen Funktionsstörungen" addToRef={addToRefs} />
							<JobItem year="Oktober 2017" text="Das Prostatakarzinom – Physiotherapeutische Behandlungsmöglichkeiten" addToRef={addToRefs} />
							<JobItem year="Mai 2017" text="Echtzeit-Ultraschallkurs in der Beckenbodentherapie" addToRef={addToRefs} />
							<JobItem year="Januar 2017" text="Echtzeit-Ultraschall im Bereich Becken und Lendenwirbelsäule" addToRef={addToRefs} />
							<JobItem year="April 2014" text="Physiotherapie bei anorektalen Dysfunktionen" addToRef={addToRefs} />
							<JobItem year="November 2013" text="Grundlagen der Ernährung für eine optimierte physiotherapeutische Behandlung" addToRef={addToRefs} />
							<JobItem year="September 2011" text="Nach der Geburt – Wochenbett und Rückbildung – Heller Konzept" addToRef={addToRefs} />
							<JobItem year="März 2011" text="Beckenbodenrehabilitation beim Mann" addToRef={addToRefs} />
							<JobItem year="November 2010" text="Beckenbodenfunktionen und -dysfunktionen, Physiotherapie nach dem Heller-Konzept" addToRef={addToRefs} />
							<JobItem year="September 2010" text="Chronische Beckenboden und Unterleibsbeschwerden" addToRef={addToRefs} />
							<JobItem year="Mai 2009" text="Weiterbildungen mit Schwerpunkt Triggerpunkttherapie" addToRef={addToRefs} />
							<JobItem year="Oktober 2012" text="Manuelle Triggerpunkttherapie MTP3" addToRef={addToRefs} />
							<JobItem year="November 2011" text="Manuelle Triggerpunkt-Therapie MTP2" addToRef={addToRefs} />
							<JobItem year="Mai 2011" text="Manuelle Triggerpunkt-Therapie MTP1" addToRef={addToRefs} />
							<h3>Weiterbildungen mit Schwerpunkt Manualtherapie</h3>
							<JobItem
								year="Oktober 2010"
								text="Manuelle Therapie, Prüfungsvorbereitungskurs mit abschließender Prüfung zur Manualtherapeutin"
								addToRef={addToRefs}
							/>
							<JobItem year="Februar 2010" text="Manuelle Therapie, Aufbaukurs Hals-Brustwirbelsäule-Arm-Bereich" addToRef={addToRefs} />
							<JobItem year="Oktober 2009" text="Manuelle Therapie, Aufbaukurs Lenden-Becken-Bein-Bereich" addToRef={addToRefs} />
							<JobItem year="März 2009" text="Manuelle Therapie, Weichteil-Kurs" addToRef={addToRefs} />
							<JobItem year="November 2008" text="Manuelle Therapie, Wirbelsäulen Kurs" addToRef={addToRefs} />
							<JobItem year="Juni 2008" text="Manuelle Therapie, Extremitäten Kurs" addToRef={addToRefs} />
							<JobItem year="November 2008" text="Kinesiology, Power Spiral Taping" addToRef={addToRefs} />
							<h3>Weiterbildungen mit Schwerpunkt Lymphdrainagetherapie</h3>
							<JobItem year="Oktober 2007" text="Manuelle Lymphdrainage nach Dr. Vodder" addToRef={addToRefs} />
						</section>
					) : null}
				</section>
				<section className="about__contact">
					<Link to="/#contact" className="btn--contact btn btn--green">
						Kontakt
					</Link>
				</section>
			</article>
		</>
	)
}

export default About
