import { motion } from "framer-motion"

import DrawPathSVG from "../../components/drawSVG/DrawPathSVG"

import welcomeImage from "../../assets/illustrations/001_undraw_welcome_re_h3d9.svg"
import examImage from "../../assets/illustrations/002_undraw_medicine_b-1-ol.svg"
import protocolImage from "../../assets/illustrations/003_undraw_done_checking_re_6vyx.svg"
import therapyImage from "../../assets/illustrations/004_undraw_options_re_9vxh.svg"

import "./Process.css"

const Process = () => {
	const container = {
		hidden: {
			opacity: 0,
			scale: 0,
		},
		visible: {
			opacity: 1,
			scale: 1,
		},
	}

	return (
		<article className="process">
			<section className="process__container">
				<div className="process__svg-container">
					<DrawPathSVG />
				</div>
			</section>
			<section className="process__show">
				<motion.div variants={container} initial="hidden" whileInView="visible" transition={{ duration: 1.2 }}>
					<img className="process__img" src={welcomeImage} alt="image of a couple in love" />
				</motion.div>
				<motion.p variants={container} initial="hidden" whileInView="visible" transition={{ duration: 1.2, delay: 0.4 }}>
					Zu Beginn steht ein ausführliches Gespräch mit speziell zugeschnittenen Fragen zur vollen Erfassung Ihrer Beschwerden.
				</motion.p>
			</section>
			<section className="process__show">
				<motion.p variants={container} initial="hidden" whileInView="visible" transition={{ duration: 1.2, delay: 0.4 }}>
					Ergänzend können Tests sowie eine Tastuntersuchung im Becken-, Bauch-, Rücken- und/oder Hüftbereich sowie dem Beckenboden gemacht werden, um noch
					genauer auf Ihre Bedürfnisse einzugehen.
				</motion.p>
				<motion.div variants={container} initial="hidden" whileInView="visible" transition={{ duration: 1.2 }}>
					<img className="process__img" src={examImage} alt="image of a couple in love" />
				</motion.div>
			</section>
			<section className="process__show">
				<motion.div variants={container} initial="hidden" whileInView="visible" transition={{ duration: 1.2 }}>
					<img className="process__img" src={protocolImage} alt="image of a couple in love" />
				</motion.div>
				<motion.p variants={container} initial="hidden" whileInView="visible" transition={{ duration: 1.2, delay: 0.4 }}>
					Je nach Beschwerdebild kann ein Protokoll über Ihre Blase oder Ihren Darm in Form eines entsprechenden Tagebuches noch mehr Aussage über die Herkunft
					der eingetretenen Veränderung geben.
				</motion.p>
			</section>
			<section className="process__show">
				<motion.p variants={container} initial="hidden" whileInView="visible" transition={{ duration: 1.2, delay: 0.4 }}>
					Die Therapie wird daraufhin individuell ausgewählt und während des gesamten Behandlungsverlaufes adaptiert und angepasst.
				</motion.p>
				<motion.div variants={container} initial="hidden" whileInView="visible" transition={{ duration: 1.2 }}>
					<img className="process__img" src={therapyImage} alt="image of a couple in love" />
				</motion.div>
			</section>
		</article>
	)
}

export default Process
