import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import "./TherapyMethods.css"

const TherapyMethods = () => {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "center top",
          scrub: 0.6,
          pin: true,
					markers: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

	return (
		<article className="therapy-methods">
			<h1>Therapiemethoden</h1>
			<h2>je nach Beschwerdebild</h2>
			<section ref={triggerRef}>
				<div ref={sectionRef} className="therapy-methods__wrapper">
					<ul className="therapy-methods__list">
						<li>Kräftigen oder entspannen der Beckenboden-, Bauch-, Rücken- und/oder Hüftmuskulatur</li>
						<li>Dehnungsübungen</li>
						<li>Mobilisation von Gelenken im Hüft-, Becken- und/oder Rückenbereich</li>
						<li>Atemübungen</li>
						<li>Entspannungsübungen</li>
						<li>Passive Behandlungstechniken wie Faszien- oder Viszeraltechniken</li>
						<li>Narbenbehandlung im Beckenboden-, Bauch- oder Rückenbereich</li>
						<li>Elektrotherapie</li>
						<li>Biofeedback für den Beckenboden und die Bauchmuskulatur mittels Echtzeitultraschall oder einem klassischen Biofeedbackgerät</li>
						<li>Erkennen und Bewältigen von typischen Belastungssituationen in Alltag, Sport sowie Beruf</li>
						<li>Tipps und Support für den optimalen Umgang nach Operationen im Becken- oder Bauchbereich</li>
						<li>Tipps und Support für den optimalen Umgang mit der Blase und dem Darm</li>
						<li>Heimprogramm</li>
					</ul>
				</div>
			</section>
		</article>
	)
}

export default TherapyMethods
