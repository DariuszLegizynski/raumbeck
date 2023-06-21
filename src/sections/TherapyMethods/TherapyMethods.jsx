import CardMethod from '../../components/CardMethod/CardMethod'
import "./TherapyMethods.css"

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
					<CardMethod text1={"Kräftigen oder entspannen der Beckenboden-, Bauch-, Rücken- und/oder Hüftmuskulatur"} text2={"Mobilisation von Gelenken im Hüft-, Becken- und/oder Rückenbereich"} hr />
					<CardMethod text1={"Dehnungsübungen"} text2={"Atemübungen"} text3={"Entspannungsübungen"} text4={"Elektrotherapie"} text5={"Heimprogramm"} />
					<CardMethod text1={"Passive Behandlungstechniken wie Faszien- oder Viszeraltechniken"} text2={"Narbenbehandlung im Beckenboden-, Bauch- oder Rückenbereich"} />
					<CardMethod text1={"Biofeedback für den Beckenboden und die Bauchmuskulatur mittels Echtzeitultraschall oder einem klassischen Biofeedbackgerät"} />
					<CardMethod text1={"Erkennen und Bewältigen von typischen Belastungssituationen in Alltag, Sport sowie Beruf"} />
					<CardMethod text1={"Tipps und Support für den optimalen Umgang:"} text2={"nach Operationen im Becken- oder Bauchbereich"} text3={"mit der Blase und dem Darm"} />
				</ul>
			</section>
		</article>
	)
}

export default TherapyMethods
