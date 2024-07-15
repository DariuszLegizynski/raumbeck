import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const DrawUrinaryIncontinenceIcon = () => {
	const urinaryIncontinenvIconRef = useRef(null)
	const handPath1Ref = useRef(null)
	const handPath2Ref = useRef(null)
	const handPath3Ref = useRef(null)
	const handPath4Ref = useRef(null)
	const handPath5Ref = useRef(null)
	const handPath6Ref = useRef(null)
	const handPath7Ref = useRef(null)

	const [handPath1Length, sethandPath1Length] = useState(1)
	const [handPath2Length, sethandPath2Length] = useState(1)
	const [handPath3Length, sethandPath3Length] = useState(1)
	const [handPath4Length, sethandPath4Length] = useState(1)
	const [handPath5Length, sethandPath5Length] = useState(1)
	const [handPath6Length, sethandPath6Length] = useState(1)
	const [handPath7Length, sethandPath7Length] = useState(1)

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		const urinaryIncontinenvIcon = urinaryIncontinenvIconRef.current
		const handPath1 = handPath1Ref.current
		const handPath2 = handPath2Ref.current
		const handPath3 = handPath3Ref.current
		const handPath4 = handPath4Ref.current
		const handPath5 = handPath5Ref.current
		const handPath6 = handPath6Ref.current
		const handPath7 = handPath7Ref.current

		let hand1Length = document.querySelector(".hand-path-1")
		let calculatedHandPath1Length = hand1Length.getTotalLength()
		sethandPath1Length(calculatedHandPath1Length)

		gsap.fromTo(
			handPath1,
			{ strokeDashoffset: calculatedHandPath1Length },
			{
				strokeDashoffset: 0,
				duration: 3,
				scrollTrigger: {
					trigger: urinaryIncontinenvIcon,
				},
			}
		)

		let hand2Length = document.querySelector(".hand-path-2")
		let calculatedHandPath2Length = hand2Length.getTotalLength()
		sethandPath2Length(calculatedHandPath2Length)

		gsap.fromTo(
			handPath2,
			{ strokeDashoffset: calculatedHandPath2Length },
			{
				strokeDashoffset: 0,
				duration: 3,
				scrollTrigger: {
					trigger: urinaryIncontinenvIcon,
				},
			}
		)

		let hand3Length = document.querySelector(".hand-path-3")
		let calculatedHandPath3Length = hand3Length.getTotalLength()
		sethandPath3Length(calculatedHandPath3Length)

		gsap.fromTo(
			handPath3,
			{ strokeDashoffset: calculatedHandPath3Length },
			{
				strokeDashoffset: 0,
				duration: 3,
				scrollTrigger: {
					trigger: urinaryIncontinenvIcon,
				},
			}
		)

		let hand4Length = document.querySelector(".hand-path-4")
		let calculatedHandPath4Length = hand4Length.getTotalLength()
		sethandPath4Length(calculatedHandPath4Length)

		gsap.fromTo(
			handPath4,
			{ strokeDashoffset: calculatedHandPath4Length },
			{
				strokeDashoffset: 0,
				duration: 3,
				scrollTrigger: {
					trigger: urinaryIncontinenvIcon,
				},
			}
		)

		let hand5Length = document.querySelector(".hand-path-5")
		let calculatedHandPath5Length = hand5Length.getTotalLength()
		sethandPath5Length(calculatedHandPath5Length)

		gsap.fromTo(
			handPath5,
			{ strokeDashoffset: calculatedHandPath5Length },
			{
				strokeDashoffset: 0,
				duration: 3,
				scrollTrigger: {
					trigger: urinaryIncontinenvIcon,
				},
			}
		)

		let hand6Length = document.querySelector(".hand-path-6")
		let calculatedHandPath6Length = hand6Length.getTotalLength()
		sethandPath6Length(calculatedHandPath6Length)

		gsap.fromTo(
			handPath6,
			{ strokeDashoffset: calculatedHandPath6Length },
			{
				strokeDashoffset: 0,
				duration: 3,
				scrollTrigger: {
					trigger: urinaryIncontinenvIcon,
				},
			}
		)

		let hand7Length = document.querySelector(".hand-path-7")
		let calculatedHandPath7Length = hand7Length.getTotalLength()
		sethandPath7Length(calculatedHandPath7Length)

		gsap.fromTo(
			handPath7,
			{ strokeDashoffset: calculatedHandPath7Length },
			{
				strokeDashoffset: 0,
				duration: 3,
				scrollTrigger: {
					trigger: urinaryIncontinenvIcon,
				},
			}
		)
	}, [])

	return (
		<>
			{handPath1Length && handPath2Length && handPath3Length && handPath4Length && handPath5Length && handPath6Length && handPath7Length && (
				<section ref={urinaryIncontinenvIconRef}>
					<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none">
						<path
							ref={handPath1Ref}
							className="hand-path-1"
							strokeDasharray={`${handPath1Length}px`}
							strokeDashoffset={`${handPath1Length}px`}
							stroke="#8591a8"
							d="M54 16c1.833 2.333 5.8 8.9 7 16.5C62.5 42 62 45 62 46s-1 9.5-2.5 15.5"
						/>
						<path
							ref={handPath2Ref}
							className="hand-path-2"
							strokeDasharray={`${handPath2Length}px`}
							strokeDashoffset={`${handPath2Length}px`}
							stroke="#8591a8"
							d="M4.201 62c-.888-3.485-2.56-12.755-2.133-21.955.427-9.2 2.311-14.287 3.2-15.681C6.334 22.62 8.573 18.509 9 16"
						/>
						<path
							ref={handPath3Ref}
							className="hand-path-3"
							strokeDasharray={`${handPath3Length}px`}
							strokeDashoffset={`${handPath3Length}px`}
							d="M3 33C17 39 23.5 42.5 29 51.5"
							stroke="#8591a8"
						/>
						<path
							ref={handPath4Ref}
							className="hand-path-4"
							strokeDasharray={`${handPath4Length}px`}
							strokeDashoffset={`${handPath4Length}px`}
							d="M61 32C46.4615 38.4865 39.7115 42.2703 34 52"
							stroke="#8591a8"
						/>
						<line
							ref={handPath5Ref}
							className="hand-path-5"
							strokeDasharray={`${handPath5Length}px`}
							strokeDashoffset={`${handPath5Length}px`}
							x1="29"
							y1="51.5"
							x2="34"
							y2="51.5"
							stroke="#8591a8"
						/>
						<line
							ref={handPath6Ref}
							className="hand-path-6"
							strokeDasharray={`${handPath6Length}px`}
							strokeDashoffset={`${handPath6Length}px`}
							x1="28.8"
							y1="51"
							x2="28.8"
							y2="62"
							stroke="#8591a8"
						/>
						<line
							ref={handPath7Ref}
							className="hand-path-7"
							strokeDasharray={`${handPath7Length}px`}
							strokeDashoffset={`${handPath7Length}px`}
							x1="34.5"
							y1="51"
							x2="34.5"
							y2="62"
							stroke="#8591a8"
						/>
						<path stroke="#8ec73d" d="M5 12c5.5 6 6 6.5 7.5 9.5 1.2 2.4 3.167 4.333 4 5" />
						<path d="M14 2.5C14.5167 3.5 16.48 5.7 20.2 6.5" stroke="#8ec73d" />
						<path
							stroke="#8ec73d"
							d="M20 6.5c1.5-.167 5-.2 7 1M49 3.2c-3.6 3-2.25 2.571-9 3M40 6.2c-.667 0-2.2.1-3 .5M37.223 6.569 23.224 13.57M33.224 13.147l-7.997 3.998M23.498 13.5c-3.504 1.5-1.001 5.502 2.002 3.501M34.217 15.55c2.024-1.071.408-3.559-1.304-2.183M21.187 27.107c-2.992 2.355.458 5.571 2.838 2.863M27.762 33.407c-3.073 2.25.263 5.584 2.736 2.96M32.64 34.357c-2.951 2.407.555 5.563 2.887 2.813"
						/>
						<path
							stroke="#8ec73d"
							d="M23.304 30.675c-3.864 2.892.426 6.964 3.522 3.622M21.17 27.124l13.611-11.932M23.466 30.514l11-9.886M27.765 33.428 37.8 24.397M30.164 36.63l10.655-9.686M35.2 37.5l9.373-9c.658-.667 2.664-2.8 5.427-6"
						/>
						<path stroke="#8ec73d" d="M49.6 23c3.2-4.8 4.333-6.667 4.5-7 .5-.833 1.9-2.7 3.5-3.5" />
					</svg>
				</section>
			)}
		</>
	)
}

export default DrawUrinaryIncontinenceIcon
