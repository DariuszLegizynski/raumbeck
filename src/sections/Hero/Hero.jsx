import hero from "../../assets/images/AboutMe.jpg"
import therapy from "../../assets/images/Homepage1.jpg"
import { useState } from "react"
import { motion, useScroll } from "framer-motion"

import "./Hero.css"

const Hero = () => {
	const { scrollYProgress } = useScroll()

	const [yPos, setYPos] = useState(0)

	scrollYProgress.onChange(val => setYPos(val))

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 1,
				staggerChildren: 0.3,
			},
		},
	}

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	}

	return (
		<article className="hero">
			<section className="hero__picture">
				<img src={hero} alt="therapist" />
				<motion.div className="hero__text" variants={container} initial="hidden" animate="show">
					<div className="hero__title">
						<motion.h1 style={{ y: -yPos * 2200 }} className="green" variants={item}>
							A
						</motion.h1>
						<motion.h1 style={{ y: -yPos * 2400 }} className="green" variants={item}>
							n
						</motion.h1>
						<motion.h1 style={{ y: -yPos * 2600 }} className="green" variants={item}>
							n
						</motion.h1>
						<motion.h1 style={{ y: -yPos * 2800 }} className="green" variants={item}>
							a
						</motion.h1>
						<motion.h1 style={{ y: -yPos * 3000 }} variants={item}>
							&nbsp;
						</motion.h1>
						<motion.h1 style={{ y: -yPos * 2800 }} className="grey" variants={item}>
							M
						</motion.h1>
						<motion.h1 style={{ y: -yPos * 2600 }} className="grey" variants={item}>
							e
						</motion.h1>
						<motion.h1 style={{ y: -yPos * 2400 }} className="grey" variants={item}>
							h
						</motion.h1>
						<motion.h1 style={{ y: -yPos * 2200 }} className="grey" variants={item}>
							r
						</motion.h1>
					</div>
					<motion.p className="grey" variants={item} style={{ y: -yPos * 2000 }}>
						--- Physiotherapeutin
					</motion.p>
				</motion.div>
			</section>
			<section className="hero__greeting">
				<hr />
				<p>Ich freue mich über Ihr Interesse an meiner therapeutischen Arbeit.</p>
				<p>
					Mein Kerngebiet ist die <b>physiotherapeutische</b> Behandlung im <b>gynäkologischen</b>, <b>urologischen</b> und <b>proktologischen</b> Bereich.
				</p>
				<img src={therapy} alt="therapy" />
				<p>Mir liegen dabei eine fachkompetente Betreuung sowie großes Einfühlungsvermögen am Herzen.</p>
			</section>
		</article>
	)
}

export default Hero
