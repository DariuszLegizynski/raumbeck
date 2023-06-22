import hero from "../../assets/images/AboutMe.jpg"
import { useRef, useEffect, useState } from "react"
import { motion, useScroll } from "framer-motion"

import "./Hero.css"

const Hero = () => {
	const [ scrollPosition, setScrollPosition ] = useState(85)

	const letterA1 = useRef()
	const letterN1 = useRef()
	const letterN2 = useRef()
	const letterA2 = useRef()
	const letterM = useRef()
	const letterE = useRef()
	const letterH = useRef()
	const letterR = useRef()

	const sentence = useRef()

	const { scrollYProgress } = useScroll({
		target: letterA1
	})

	useEffect(() => {
		setScrollPosition(scrollYProgress.current)
	}, [scrollYProgress])

	// gsap.registerPlugin(ScrollTrigger)
	// const speed = 20

	// const parallax = useRef()
	console.log(scrollPosition)


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
		initial: { y: '0px'},
		hidden: { opacity: 0 },
		show: { opacity: 1 },
		animate:{y: scrollYProgress}
	}

	return (
		<article className="hero">
			<img src={hero} alt="therapist" />
			<motion.section  className="hero__text" variants={container} initial="hidden" animate="show">
				<div className="hero__title">
					<motion.h1 ref={letterA1} className="green" variants={item}>
						A
					</motion.h1>
					<motion.h1 ref={letterN1} className="green" variants={item}>
						n
					</motion.h1>
					<motion.h1 ref={letterN2} className="green" variants={item}>
						n
					</motion.h1>
					<motion.h1 ref={letterA2} className="green" variants={item}>
						a
					</motion.h1>
					<motion.h1 variants={item}>&nbsp;</motion.h1>
					<motion.h1 ref={letterM} className="grey" variants={item}>
						M
					</motion.h1>
					<motion.h1 ref={letterE} className="grey" variants={item}>
						e
					</motion.h1>
					<motion.h1 ref={letterH} className="grey" variants={item}>
						h
					</motion.h1>
					<motion.h1 ref={letterR} className="grey" variants={item}>
						r
					</motion.h1>
				</div>
				<motion.p
					ref={sentence}
					className="grey"
					variants={item}
				>
					--- Physiotherapeutin
				</motion.p>
			</motion.section>
			<section className="hero__greeting">
				<p>Ich freue mich über Ihr Interesse an meiner therapeutischen Arbeit.</p>
				<p>Mein Kerngebiet ist die <b>physiotherapeutische</b> Behandlung im <b>gynäkologischen</b>, <b>urologischen</b> und <b>proktologischen</b> Bereich.</p>
				<p>Mir liegen dabei eine fachkompetente Betreuung sowie großes Einfühlungsvermögen am Herzen.</p>
			</section>
		</article>
	)
}

export default Hero
