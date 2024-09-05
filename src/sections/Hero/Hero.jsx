import hero from "../../assets/images/AboutMe_small.webp"
import { useState } from "react"
import { motion, useScroll } from "framer-motion"
import { HashLink as Link } from "react-router-hash-link"

import "./Hero.css"

const Hero = () => {
	const { scrollYProgress } = useScroll()

	const [yPos, setYPos] = useState(0)

	scrollYProgress.on("change", val => setYPos(val))

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
		<article id="hero" className="hero">
			<div className="hero__bg">
				<div className="hero__picture">
					<img src={hero} alt="therapist" width={1000} height={1550} />
					<div className="hero__content">
						<motion.title className="hero__text" variants={container} initial="hidden" animate="show">
							<div className="hero__title">
								<motion.h1 style={{ y: -yPos * 2200 }} className="green" variants={item}>
									Anna
								</motion.h1>
								<motion.h1 style={{ y: -yPos * 2200 }} variants={item}>
									&nbsp;
								</motion.h1>
								<motion.h1 style={{ y: -yPos * 2200 }} className="grey" variants={item}>
									Mehr
								</motion.h1>
							</div>
							<motion.p className="grey" variants={item} style={{ y: -yPos * 2000 }}>
								--- Physiotherapeutin
							</motion.p>
						</motion.title>
						<Link to="/#contact" className="hero__contact--desktop btn btn--green">
							Kontakt
						</Link>
					</div>
				</div>
				<Link to="/#contact" className="hero__contact--mobile btn btn--green">
					Kontakt
				</Link>
			</div>
		</article>
	)
}

export default Hero
