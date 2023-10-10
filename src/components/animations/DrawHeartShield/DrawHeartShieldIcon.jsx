import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const DrawHeartShieldIcon = () => {
  const heartShieldIconRef = useRef(null)
	const heartPathRef = useRef(null)
  const shieldPathRef = useRef(null)

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
    const heartShieldIcon = heartShieldIconRef.current
		const heartPath = heartPathRef.current
    const shieldPath = shieldPathRef.current

    let heartLength = document.querySelector(".heart")
    let heartPathLength = heartLength.getTotalLength()

    gsap.fromTo(
      heartPath,
      { strokeDashoffset: heartPathLength },
      {
        strokeDashoffset: 0,
        duration: 3,
        scrollTrigger: {
          trigger: heartShieldIcon,
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
          trigger: heartShieldIcon,
        }
      })
	}, [])

	return (
		<section ref={heartShieldIconRef} >
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={heartPathRef}
          className="heart"
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
          stroke='#8ec73d'
          strokeDasharray='129.63739013671875px'
          strokeDashoffset='129.63739013671875px'
          d="M40.9565,32.1669V6.6081A2.1081,2.1081,0,0,0,38.8483,4.5H9.1513A2.1081,2.1081,0,0,0,7.0432,6.6081h0V32.1669A3.6514,3.6514,0,0,0,8.869,35.3291l13.3053,7.6817a3.6512,3.6512,0,0,0,3.6514,0L39.131,35.3291a3.6514,3.6514,0,0,0,1.8258-3.1622Z"
        />
      </svg>
		</section>
	)
}

export default DrawHeartShieldIcon
