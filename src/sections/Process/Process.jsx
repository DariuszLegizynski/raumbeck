import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react"

import DrawPathSVG from "../../components/drawSVG/DrawPathSVG"

import welcomeImage from "../../assets/illustrations/001_undraw_welcome_re_h3d9.svg"
import examImage from "../../assets/illustrations/002_undraw_medicine_b-1-ol.svg"
import protocolImage from "../../assets/illustrations/003_undraw_done_checking_re_6vyx.svg"
import therapyImage from "../../assets/illustrations/004_undraw_options_re_9vxh.svg"

import "./Process.css"

const Process = () => {
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
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 1,
					scrollTrigger: {
						trigger: el,
					},
				}
			)
		})
	})

	// useEffect(() => {
	// 	let t1 = gsap.timeline()
	// 	revealRefs.current.forEach((el, index) => {
	// 		t1.fromTo(
	// 			el.childNodes[0],
	// 			{
	// 				y: "0",
	// 			},
	// 			{
	// 				y: "-30%",

	// 				scrollTrigger: {
	// 					id: `section-${index + 1}`,
	// 					trigger: el,
	// 					start: "top center+=200px",
	// 					end: "bottom center",
	// 					scrub: true,
	// 				},
	// 			}
	// 		)
	// 	})

	// 	return () => {
	// 		if (t1) t1.kill()
	// 	}
	// }, [])

	const container = {
		hidden: {
			opacity: 0,
			scale: 0,
		},
		visible: {
			opacity: 1,
			scale: 1,
		},
		viewport: { once: true },
	}

	const ProcessItem = ({ imgSrc, imgAlt, text, addToRef }) => {
		return (
			<section ref={addToRef} className="process__item">
				<div>
					<img className="process__img" src={imgSrc} alt={imgAlt} />
				</div>
				<p>{text}</p>
			</section>
		)
	}

	// const ProcessItem = ({ imgSrc, imgAlt, text, addToRef }) => {
	// 	return (
	// 		<section ref={addToRef} className="process__item">
	// 			<motion.div variants={container} initial="hidden" whileInView="visible" transition={{ duration: 1.2 }}>
	// 				<img className="process__img" src={imgSrc} alt={imgAlt} />
	// 			</motion.div>
	// 			<motion.p variants={container} initial="hidden" whileInView="visible" transition={{ duration: 1.2, delay: 0.4 }}>
	// 				{text}
	// 			</motion.p>
	// 		</section>
	// 	)
	// }

	return (
		<article className="process">
			<section className="process__container flex-center">
				<div className="flex-center">
					<DrawPathSVG />
				</div>
			</section>
			<section className="process__description">
				<ProcessItem
					addToRef={addToRefs}
					imgSrc={welcomeImage}
					imgAlt="a couple in love"
					text="Zu Beginn steht ein ausführliches Gespräch mit speziell zugeschnittenen Fragen zur vollen Erfassung Ihrer Beschwerden."
				/>
				<ProcessItem
					addToRef={addToRefs}
					imgSrc={examImage}
					imgAlt="examing a patient"
					text="Ergänzend können Tests sowie eine Tastuntersuchung im Becken-, Bauch-, Rücken- und/oder Hüftbereich sowie dem Beckenboden gemacht werden, um noch
						genauer auf Ihre Bedürfnisse einzugehen."
				/>
				<ProcessItem
					addToRef={addToRefs}
					imgSrc={protocolImage}
					imgAlt="writing a protocol"
					text="Je nach Beschwerdebild kann ein Protokoll über Ihre Blase oder Ihren Darm in Form eines entsprechenden Tagebuches noch mehr Aussage über die
						Herkunft der eingetretenen Veränderung geben."
				/>
				<ProcessItem
					addToRef={addToRefs}
					imgSrc={therapyImage}
					imgAlt="person having a therapy"
					text="Die Therapie wird daraufhin individuell ausgewählt und während des gesamten Behandlungsverlaufes adaptiert und angepasst."
				/>
			</section>
		</article>
	)
}

export default Process
