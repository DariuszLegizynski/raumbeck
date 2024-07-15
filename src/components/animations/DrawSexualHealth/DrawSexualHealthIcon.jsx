import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const DrawSexualHealthIcon = () => {
	const sexualHealthIconRef = useRef(null)
	const outerPathRef = useRef(null)
	const innerPath1Ref = useRef(null)
	const innerPath2Ref = useRef(null)

	const [outerPathLength, setOuterPathLength] = useState(1)
	const [innerPath1Length, setInnerPath1Length] = useState(1)
	const [innerPath2Length, setInnerPath2Length] = useState(1)

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		const sexualHealthIcon = sexualHealthIconRef.current
		const outerPath = outerPathRef.current
		const innerPath1 = innerPath1Ref.current
		const innerPath2 = innerPath2Ref.current

		let outerLineLength = document.querySelector(".outer-line")
		let calculatedOuterPathLength = outerLineLength.getTotalLength()
		setOuterPathLength(calculatedOuterPathLength)

		gsap.fromTo(
			outerPath,
			{ strokeDashoffset: calculatedOuterPathLength },
			{
				strokeDashoffset: 0,
				duration: 4,
				scrollTrigger: {
					trigger: sexualHealthIcon,
				},
			}
		)

		let path1Length = document.querySelector(".inner-line-1")
		let calculatedInnerPath1Length = path1Length.getTotalLength()
		setInnerPath1Length(calculatedInnerPath1Length)

		gsap.fromTo(
			innerPath1,
			{ strokeDashoffset: calculatedInnerPath1Length },
			{
				strokeDashoffset: 0,
				duration: 4,
				scrollTrigger: {
					trigger: sexualHealthIcon,
				},
			}
		)

		let path2Length = document.querySelector(".inner-line-2")
		let calculatedInnerPath2Length = path2Length.getTotalLength()
		setInnerPath2Length(calculatedInnerPath2Length)

		gsap.fromTo(
			innerPath2,
			{ strokeDashoffset: calculatedInnerPath2Length },
			{
				strokeDashoffset: 0,
				duration: 4,
				scrollTrigger: {
					trigger: sexualHealthIcon,
				},
			}
		)
	}, [])

	return (
		<>
			{outerPathLength && innerPath1Length && innerPath2Length && (
				<section ref={sexualHealthIconRef}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 57 48">
						<path stroke="#8591a8" d="M26 39v9M30.5 39v9" />
						<path stroke="#8591a8" d="M25.5 39h5m24-17c-5.2766 1-17.4638 5.8-24 17" />
						<path
							fill="#8591a8"
							d="M25.5613 39.2733C18.31 28.1652 6.409 23.3255 1.4 22.3024l.2-.9798c5.191 1.0603 17.3621 6.0122 24.7987 17.4041l-.8374.5466Z"
						/>
						<path
							ref={outerPathRef}
							className="outer-line"
							fill="none"
							stroke="#8591a8"
							strokeDasharray={`${outerPathLength}px`}
							strokeDashoffset={`${outerPathLength}px`}
							d="M52 15c-2.5 1.6667-9.2 5.3-16 6.5m-31.5-7c2.3333 1.8333 9.3 5.9 18.5 7.5"
						/>
						<path
							ref={innerPath1Ref}
							className="inner-line-1"
							fill="none"
							stroke="#8591a8"
							strokeDasharray={`${innerPath1Length}px`}
							strokeDashoffset={`${innerPath1Length}px`}
							d="M10 1 2.5 19.8C2 21.2842 1 25.5389 1 30.6842 1 37.1158 2 42.0632 3.5 48M46.5 0 54 19c.5 1.5 1.5 5.8 1.5 11 0 6.5-1 11.5-2.5 17.5"
						/>
						<path
							ref={innerPath2Ref}
							className="inner-line-2"
							stroke="#8ec73d"
							fill="none"
							strokeDasharray={`${innerPath2Length}px`}
							strokeDashoffset={`${innerPath2Length}px`}
							d="m27.9642 9.1857-6 15M27.5 24.5h-6M28 24v10M37.924 18.265l-10 16M37.5 18.5h-7M30.0431 18.7969l4-9M27.5 9.5h7"
						/>
					</svg>
				</section>
			)}
		</>
	)
}

export default DrawSexualHealthIcon
