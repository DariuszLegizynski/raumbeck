import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const DrawcrossShieldIcon = () => {
  const crossShieldIconRef = useRef(null)
	const crossPathRef = useRef(null)
  const shieldPathRef = useRef(null)

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
    const crossShieldIcon = crossShieldIconRef.current
		const crossPath = crossPathRef.current
    const shieldPath = shieldPathRef.current

    let crossLength = document.querySelector(".cross")
    let crossPathLength = crossLength.getTotalLength()

    gsap.fromTo(
      crossPath,
      { strokeDashoffset: crossPathLength },
      {
        strokeDashoffset: 0,
        duration: 3,
        scrollTrigger: {
          trigger: crossShieldIcon,
        }
      })

    let shieldLength = document.querySelector(".shield")
    let shieldPathLength = shieldLength.getTotalLength()

    gsap.fromTo(
      shieldPath,
      { strokeDashoffset: shieldPathLength },
      {
        strokeDashoffset: 0,
        duration: 3,
        scrollTrigger: {
          trigger: crossShieldIcon,
        }
      })
	}, [])

	return (
		<section ref={crossShieldIconRef} >
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={crossPathRef}
          className="cross"
          fill="none"
          stroke='#8ec73d'
          strokeDasharray='87.41299438476562px'
          strokeDashoffset='87.41299438476562px'
          d="M20.9937,9.4593v7.92h-7.92v6.0112h7.92v7.922H27.007v-7.922h7.92V17.3793h-7.92v-7.92Z"
        />
        <path
          ref={shieldPathRef}
          className="shield"
          fill="none"
          stroke='#8591a8'
          strokeDasharray='129.63739013671875px'
          strokeDashoffset='129.63739013671875px'
          d="M40.9565,32.1669V6.6081A2.1081,2.1081,0,0,0,38.8483,4.5H9.1513A2.1081,2.1081,0,0,0,7.0432,6.6081h0V32.1669A3.6514,3.6514,0,0,0,8.869,35.3291l13.3053,7.6817a3.6512,3.6512,0,0,0,3.6514,0L39.131,35.3291a3.6514,3.6514,0,0,0,1.8258-3.1622Z"
        />
      </svg>
		</section>
	)
}

export default DrawcrossShieldIcon
