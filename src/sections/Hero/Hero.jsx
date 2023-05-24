import talkPatient from "../../assets/images/AboutMe.jpg"
import { motion } from "framer-motion"

import "./Hero.css"

const Hero = () => {
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
			<img src={talkPatient} />
			<motion.section className="hero__text" variants={container} initial="hidden" animate="show">
				<div className="hero__title">
					<motion.h1 className="green" variants={item} data-scroll data-scroll-delay="0.18" data-scroll-speed="4">
						A
					</motion.h1>
					<motion.h1 className="green" variants={item} data-scroll data-scroll-delay="0.16" data-scroll-speed="4">
						n
					</motion.h1>
					<motion.h1 className="green" variants={item} data-scroll data-scroll-delay="0.14" data-scroll-speed="4">
						n
					</motion.h1>
					<motion.h1 className="green" variants={item} data-scroll data-scroll-delay="0.12" data-scroll-speed="4">
						a
					</motion.h1>
					<motion.h1 variants={item}>&nbsp;</motion.h1>
					<motion.h1 className="grey" variants={item} data-scroll data-scroll-delay="0.1" data-scroll-speed="4">
						M
					</motion.h1>
					<motion.h1 className="grey" variants={item} data-scroll data-scroll-delay="0.08" data-scroll-speed="4">
						e
					</motion.h1>
					<motion.h1 className="grey" variants={item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4">
						h
					</motion.h1>
					<motion.h1 className="grey" variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
						r
					</motion.h1>
				</div>
				<motion.p
					className="grey"
					variants={item}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.2, delay: 3.75 }}
					data-scroll
					data-scroll-delay="0.04"
					data-scroll-speed="2"
				>
					--- Physiotherapeutin
				</motion.p>
			</motion.section>
			<section className="hero__greeting">
				<p>Ich freue mich über Ihr Interesse an meiner therapeutischen Arbeit.</p>
				<p>Mein Kerngebiet ist die physiotherapeutische Behandlung im gynäkologischen, urologischen und proktologischen Bereich.</p>
				<p>Mir liegen dabei eine fachkompetente Betreuung sowie großes Einfühlungsvermögen am Herzen.</p>
			</section>
		</article>
	)
}

export default Hero
