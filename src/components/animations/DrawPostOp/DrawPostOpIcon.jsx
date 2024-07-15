import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const DrawPostOpIcon = () => {
	const postOpIconRef = useRef(null)
	const postOp1Ref = useRef(null)
	const postOp3Ref = useRef(null)

	const [postOp1Length, setPostOp1Length] = useState(1)
	const [postOp3Length, setPostOp3Length] = useState(1)

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		const postOpIcon = postOpIconRef.current
		const postOp1Path = postOp1Ref.current
		const postOp3Path = postOp3Ref.current

		let postOp1PathLength = document.querySelector(".post-op-1")
		let calculatedPostOp1PathLength = postOp1PathLength.getTotalLength()
		setPostOp1Length(calculatedPostOp1PathLength)

		gsap.fromTo(
			postOp1Path,
			{ strokeDashoffset: calculatedPostOp1PathLength },
			{
				strokeDashoffset: 0,
				duration: 3,
				scrollTrigger: {
					trigger: postOpIcon,
				},
			}
		)

		let postOp3PathLength = document.querySelector(".post-op-3")
		let calculatedPostOp3PathLength = postOp3PathLength.getTotalLength()
		setPostOp3Length(calculatedPostOp3PathLength)

		gsap.fromTo(
			postOp3Path,
			{ strokeDashoffset: calculatedPostOp3PathLength },
			{
				strokeDashoffset: 0,
				duration: 3,
				scrollTrigger: {
					trigger: postOpIcon,
				},
			}
		)
	}, [])

	return (
		<section>
			<svg ref={postOpIconRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
				<path
					ref={postOp1Ref}
					fill="none"
					stroke="#8591a8"
					className="post-op-1"
					strokeDasharray={`${postOp1Length}px`}
					strokeDashoffset={`${postOp1Length}px`}
					d="M46.12 63.86s.24-8.42.24-10.89c0-2.48 3.54-4.05 4.37-4.5.83-.45 12.4-8.87 12.52-21.33C64.25 14.6 52.08.61 51.67.64M41.16 53.08s-13.82 5.05-14.05-4.61c-.24-4.49 9.8-11.34 10.98-18.3 1.18-6.96 3.54-12.12-2.83-19.31-6.38-7.19-12.29-5.28-13.59-3.93-1.3 1.35-4.25 5.05 2.84 10.11 7.08 5.05 8.74 10.55 5.9 16.5-2.83 5.95-9.69 14.95-16.25 14.23-6.92-.61-7.84-6.59-7.84-6.59M.88 62.85s-.47-29.98.59-34.36c2.61-9.55.64-22.93 1.37-26.96"
				/>
				<path
					ref={postOp3Ref}
					fill="none"
					stroke="#8ec73d"
					className="post-op-3"
					strokeDasharray={`${postOp3Length}px`}
					strokeDashoffset={`${postOp3Length}px`}
					d="M35.25 43.01c4.02.57 9.69 1.35 13.82-8.75 3.07-7.53.95-29.76-6.26-28.52-5.43 1.46-.83 7.74-.24 11.22.59 3.49 2.96 16.29-3.07 21.9-6.02 5.61-7.16 8.58-5.39 13.74m-22.78-6.36s1.93-12.79 2.25-14.58c1.34-.1 8.93-2.52 9.19-5.86.1-2.75-3.4-4.98-7.24-5.35-3.84-.4-7.61-.31-8.12 2.9-.17 3.59 5.11 7.07 6.17 8.33"
				/>
			</svg>
		</section>
	)
}

export default DrawPostOpIcon
