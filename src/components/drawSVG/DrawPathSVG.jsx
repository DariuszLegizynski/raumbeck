import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import IconItem from "../../assets/icons/icons"
import "./DrawPathSVG.css"

const DrawPathSVG = () => {
	const refSVG = useRef(null)
	gsap.registerPlugin(ScrollTrigger)

	useLayoutEffect(() => {
		let element = refSVG.current

		let svg = document.querySelector(".vector-path")

		const length = svg.getBoundingClientRect()

		// starting postion of svg drawing
		svg.style.strokeDasharray = length

		// hode svg before scrolling occurs
		svg.style.strokeDashoffset = length

		let t1 = gsap.timeline({
			scrollTrigger: {
				trigger: element,
				start: "top center",
				end: "bottom bottom",
				markers: true,
				onUpdate: (self) => {
					console.log(self)
				}
			},
		})

		return () => {}
	}, [])

	return (
		<section className="vector" ref={refSVG}>
			{/* <IconItem type="vector" width="52" height="365" fillColor="none" pathClass="vector-path" /> */}
			<svg width="52" height="365" viewBox="0 0 52 365" fill="none" className="vector-path" xmlns="http://www.w3.org/2000/svg">
				<path
					className="vector-path"
					d="M26 314C10.5 314 1 322.5 1 338.5C1 354.5 10 364.5 26 364.5M26 364.5C42 364.5 50.9016 356.4 50.5 338.5C50.0984 320.6 27.3356 321.68 26 338.5V364.5ZM26 0V314.5"
					stroke="black"
				/>
			</svg>
		</section>
	)
}

export default DrawPathSVG
