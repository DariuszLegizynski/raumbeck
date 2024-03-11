import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react"

import DrawPathSVG from "../../components/animations/drawPath/DrawPathSVG"

import meeting from "../../assets/images/Homepage3_2.jpg"

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
						start: "top 250px",
						end: "bottom center",
					},
				}
			)
		})
	})

	const ProcessItem = ({ imgSrc, imgAlt, text, addToRef, childIdentifier }) => {
		return (
			<section ref={addToRef} className={`process__item ${childIdentifier}`}>
				<div>
					<img className="process__img" src={imgSrc} alt={imgAlt} />
				</div>
				<p>{text}</p>
			</section>
		)
	}

	return (
		<article className="process" id="services">
			<section className="process__title">
				<h1 className="grey">Erstgespräch</h1>
				<div className="hr-line" style={{ borderBottom: '4px solid white' }} />
			</section>
			<img className="process__hero-image" src={meeting} alt="therapist" />
			<section className="process__body">
				<section className="process__container flex-center">
					<div className="flex-center">
						<DrawPathSVG />
					</div>
				</section>
				<section className="process__description">
					<ProcessItem
						addToRef={addToRefs}
						imgSrc={welcomeImage}
						childIdentifier={"process__child-1"}
						imgAlt="a couple in love"
						text="Zu Beginn steht ein ausführliches Gespräch mit speziell zugeschnittenen Fragen zur vollen Erfassung Ihrer Beschwerden."
					/>
					<ProcessItem
						addToRef={addToRefs}
						imgSrc={examImage}
						childIdentifier={"process__child-2"}
						imgAlt="examing a patient"
						text="Ergänzend können Tests sowie eine Tastuntersuchung im Becken-, Bauch-, Rücken- und/oder Hüftbereich sowie dem Beckenboden gemacht werden, um noch
						genauer auf Ihre Bedürfnisse einzugehen."
					/>
					<ProcessItem
						addToRef={addToRefs}
						imgSrc={protocolImage}
						childIdentifier={"process__child-3"}
						imgAlt="writing a protocol"
						text="Je nach Beschwerdebild kann ein Protokoll über Ihre Blase oder Ihren Darm in Form eines entsprechenden Tagebuches noch mehr Aussage über die
						Herkunft der eingetretenen Veränderung geben."
					/>
					<ProcessItem
						addToRef={addToRefs}
						imgSrc={therapyImage}
						childIdentifier={"process__child-4"}
						imgAlt="person having a therapy"
						text="Die Therapie wird daraufhin individuell ausgewählt und während des gesamten Behandlungsverlaufes adaptiert und angepasst."
					/>
				</section>
			</section>
		</article>
	)
}

export default Process
