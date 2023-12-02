import hero from "../../assets/images/AboutMe.jpg"
import hero2 from "../../assets/images/Homepage2.jpg"
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
			<div class="hero__bg">
			<div className="hero__picture">
				<img
					src={hero}
					alt="therapist"
				/>
				<div className="hero__content">
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
					<button className='hero__contact btn btn--green'>Kontakt</button>
				</div>
			</div>
			</div>
			
		</article>
	)
}

export default Hero
