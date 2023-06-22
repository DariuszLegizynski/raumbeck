import CardMethod from '../../components/CardMethod/CardMethod'
import "./TherapyMethods.css"

import backpain from "../../assets/illustrations/back-pain-woman-svgrepo-com.svg"
import gymnastics from "../../assets/illustrations/woman-doing-gymnastics-at-home-svgrepo-com.svg"
import treatment from "../../assets/illustrations/nurse-svgrepo-com.svg"
import feedback from "../../assets/illustrations/medical-examination-female-svgrepo-com.svg"
import stressSituation from "../../assets/illustrations/a-clerk-chased-by-a-phone-call-for-inquiries-svgrepo-com.svg"
import happyWomen from "../../assets/illustrations/happy-woman-svgrepo-com.svg"

const TherapyMethods = () => {
	// useEffect(() => {
	// 	const pin = gsap.fromTo(
	// 		sectionRef.current,
	// 		{
	// 			translateX: 0,
	// 		},
	// 		{
	// 			translateX: "-300vw",
	// 			ease: "none",
	// 			duration: 1,
	// 			scrollTrigger: {
	// 				trigger: triggerRef.current,
	// 				start: "top center",
	// 				end: "center top",
	// 				scrub: 0.6,
	// 				// pin: true,
	// 				markers: true,
	// 			},
	// 		}
	// 	)
	// 	return () => {
	// 		{
	// 			/* A return function for killing the animation on component unmount */
	// 		}
	// 		pin.kill()
	// 	}
	// }, [])

	return (
		<article className="therapy-methods">
			<section className="therapy-methods__title">
				<h1>Therapie</h1>
				<span>je nach Beschwerdebild</span>
			</section>
			<section className="therapy-methods__wrapper">
				<ul className="therapy-methods__list">
					<CardMethod imgSrc={backpain} imgAlt="women with backpain" text1={"Kräftigen oder entspannen der Beckenboden-, Bauch-, Rücken- und/oder Hüftmuskulatur"} text2={"Mobilisation von Gelenken im Hüft-, Becken- und/oder Rückenbereich"} hr />
					<CardMethod imgSrc={gymnastics} imgAlt="women doing gimnastics" text1={"Dehnungsübungen"} text2={"Atemübungen"} text3={"Entspannungsübungen"} text4={"Elektrotherapie"} text5={"Heimprogramm"} />
					<CardMethod imgSrc={treatment} imgAlt="women giving treatment" text1={"Passive Behandlungstechniken wie Faszien- oder Viszeraltechniken"} text2={"Narbenbehandlung im Beckenboden-, Bauch- oder Rückenbereich"} />
					<CardMethod imgSrc={feedback} imgAlt="women getting medical feedback" text1={"Biofeedback für den Beckenboden und die Bauchmuskulatur mittels Echtzeitultraschall oder einem klassischen Biofeedbackgerät"} />
					<CardMethod imgSrc={stressSituation} imgAlt="person in a stressfull situation" text1={"Erkennen und Bewältigen von typischen Belastungssituationen in Alltag, Sport sowie Beruf"} />
					<CardMethod imgSrc={happyWomen} imgAlt="happy women" text1={"Tipps und Support für den optimalen Umgang:"} text2={"nach Operationen im Becken- oder Bauchbereich"} text3={"mit der Blase und dem Darm"} />
				</ul>
			</section>
		</article>
	)
}

export default TherapyMethods
