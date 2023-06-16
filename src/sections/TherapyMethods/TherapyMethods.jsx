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
				<h1>Therapiemethoden</h1>
				<h2>je nach Beschwerdebild</h2>
			</section>
			<section className="therapy-methods__wrapper">
					<ul className="therapy-methods__list">
						<li>Kräftigen oder entspannen der Beckenboden-, Bauch-, Rücken- und/oder Hüftmuskulatur</li>
						<li>
							<p>Dehnungsübungen</p>
							<p>Atemübungen</p>
							<p>Entspannungsübungen</p>
							<p>Elektrotherapie</p>
							<p>Heimprogramm</p>
						</li>
						<li>Mobilisation von Gelenken im Hüft-, Becken- und/oder Rückenbereich</li>
						<li>Passive Behandlungstechniken wie Faszien- oder Viszeraltechniken</li>
						<li>Narbenbehandlung im Beckenboden-, Bauch- oder Rückenbereich</li>
						<li>Biofeedback für den Beckenboden und die Bauchmuskulatur mittels Echtzeitultraschall oder einem klassischen Biofeedbackgerät</li>
						<li>Erkennen und Bewältigen von typischen Belastungssituationen in Alltag, Sport sowie Beruf</li>
						<li>Tipps und Support für den optimalen Umgang nach Operationen im Becken- oder Bauchbereich</li>
						<li>Tipps und Support für den optimalen Umgang mit der Blase und dem Darm</li>
					</ul>
			</section>
		</article>
	)
}

export default TherapyMethods
