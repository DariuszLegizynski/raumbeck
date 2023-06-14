import hero from "../../assets/images/AboutMe.jpg"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import "./Hero.css"

const Hero = () => {
	gsap.registerPlugin(ScrollTrigger)
	const speed = 20

	const parallax = useRef()

	const letterA1 = useRef()
	const letterN1 = useRef()
	const letterN2 = useRef()
	const letterA2 = useRef()
	const letterM = useRef()
	const letterE = useRef()
	const letterH = useRef()
	const letterR = useRef()

	const sentence = useRef()

	useEffect(() => {
		gsap.context(() => {
			const t1 = gsap.timeline({
				scrollTrigger: {
					trigger: parallax.current,
					start: "500 450",
					end: "600 350",
					scrub: true,
			},
			})
			t1.to(letterA1.current,{
				y: -1 * speed,
				opacity: 0,
				ease: "power1.in",
			})
			t1.to(letterN1.current,{
				y: -1.025 * speed,
				ease: "power1.in",
				opacity: 0,
			})
			t1.to(letterN2.current,{
				y: -1.05 * speed,
				ease: "power1.in",
				opacity: 0,
			})
			t1.to(letterA2.current,{
				y: -1.075 * speed,
				ease: "power1.in",
				opacity: 0,
			})
			t1.to(letterM.current,{
				y: -1.1 * speed,
				ease: "power1.in",
				opacity: 0,
			})
			t1.to(letterE.current,{
				y: -1.125 * speed,
				ease: "power1.in",
				opacity: 0,
			})
			t1.to(letterH.current,{
				y: -1.15 * speed,
				ease: "power1.in",
				opacity: 0,
			})
			t1.to(letterR.current,{
				y: -1.175 * speed,
				ease: "power1.in",
				opacity: 0,
			})
			t1.to(sentence.current,{
				y: -1.2 * speed,
				ease: "power1.in",
				opacity: 0,
			})
		})
	}, [])

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
		<article ref={parallax} className="hero">
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
