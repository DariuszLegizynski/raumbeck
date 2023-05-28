import { useRef } from "react"
import IconItem from "../../assets/icons/icons"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import "./DrawPathSVG.css"
import { useLayoutEffect } from "react"

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
				onUpdate: self => console.log(self),
			},
		})

		console.log(length)

		return () => {}
	}, [])

	return (
		<section className="vector" ref={refSVG}>
			<IconItem type="vector" width="52" height="365" fillColor="none" classType="vector-path" />
		</section>
	)
}

export default DrawPathSVG
