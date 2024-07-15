import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const DrawHeartFolderIcon = () => {
	const pregnancyIconRef = useRef(null)
	const pregnancyPath1Ref = useRef(null)
	const pregnancyPath2Ref = useRef(null)

	const [pregnancyPath1Length, setPregnancyPath1Length] = useState(1)
	const [pregnancyPath2Length, setPregnancyPath2Length] = useState(1)

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		const pregnancyIcon = pregnancyIconRef.current
		const pregnancyPath1 = pregnancyPath1Ref.current
		const pregnancyPath2 = pregnancyPath2Ref.current

		let pregnancy1Length = document.querySelector(".pregnancy-length-1")
		let calculatedPregnancy1Length = pregnancy1Length.getTotalLength()
		setPregnancyPath1Length(calculatedPregnancy1Length)

		gsap.fromTo(
			pregnancyPath1,
			{ strokeDashoffset: calculatedPregnancy1Length },
			{
				strokeDashoffset: 0,
				duration: 3,
				scrollTrigger: {
					trigger: pregnancyIcon,
				},
			}
		)

		let pregnancy2Length = document.querySelector(".pregnancy-length-2")
		let calculatedPregnancy2Length = pregnancy2Length.getTotalLength()
		setPregnancyPath2Length(calculatedPregnancy2Length)

		gsap.fromTo(
			pregnancyPath2,
			{ strokeDashoffset: calculatedPregnancy2Length },
			{
				strokeDashoffset: 0,
				duration: 3,
				scrollTrigger: {
					trigger: pregnancyIcon,
				},
			}
		)
	}, [])

	return (
		<section ref={pregnancyIconRef}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
				<path
					ref={pregnancyPath1Ref}
					className="pregnancy-length-1"
					fill="none"
					stroke="#8591a8"
					d="M15.91 21.82s1.73.54 1.91-6.37c.18-6.9 1.09-9.36 3.63-11.36 2.91-2.36 7.19-1.64 7.19-1.64s4.18.73 7.54 6.1c.27 5.63-1.09 3.9-.63 9.27-.46.54-1.42-.32-1.82.09-.72.73-1.29 3.97-2.79 3.97-1.82-.57-3.3-2.06-3.3-2.06m5.09-10.27s-.82 3.54-6.28 5.09c-3.63 1.27-2.63 3.81-2.81 7.54m18.81 23.64s-3.36-2.82-5.36-7.46c0-2.09 1.36-1.27.82-3.72-1.36-2.28-9.36-9.82-9.36-9.82m15  7.37M18 62.18s1.73-2.18 2.73-7.45c1-5.28.58-5.69 1.4-8.78m20.09 16.8c.69-2.28.28-4.28.28-4.28"
					strokeDasharray={`${pregnancyPath1Length}px`}
					strokeDashoffset={`${pregnancyPath1Length}px`}
				/>
				<path
					ref={pregnancyPath2Ref}
					className="pregnancy-length-2"
					fill="none"
					stroke="#8ec73d"
					d="M 43.55,48.45
           C 43.55,48.45 46.45,47.55 46.64,51.91
             46.82,56.27 42.73,56.18 42.73,56.18
             42.73,56.18 28.18,55.18 22.45,46.45
             16.73,37.73 17.55,30.55 17.55,30.55
             17.55,30.55 17.45,26.27 19.27,23.91M 22.45,27.64
           C 22.45,27.64 27.18,28.09 30.64,43.27
             35.55,48.73 39.00,49.82 40.27,50.64"
					strokeDasharray={`${pregnancyPath2Length}px`}
					strokeDashoffset={`${pregnancyPath2Length}px`}
				/>
			</svg>
		</section>
	)
}

export default DrawHeartFolderIcon

// 23.63s2.9-.9 3.09 3.46c.18 4.36-3.91 4.27-3.91 4.27s-14.55-1-20.28-9.73c-5.72-8.72-4.9-15.9-4.9-15.9s-.1-4.28 1.72-6.64m3.18 3.73s4.73.45 8.19 15.63c4.91 5.46 8.36 6.55 9.63
