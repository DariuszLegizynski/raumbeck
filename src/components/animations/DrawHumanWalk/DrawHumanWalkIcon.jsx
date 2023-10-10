import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const DrawHumanWalkIcon = () => {
  const humanWalkIconRef = useRef(null)
	const circlePathRef = useRef(null)
  const arrowPathRef = useRef(null)
  const headPathRef = useRef(null)
  const humanPathRef = useRef(null)

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
    const humanWalkIcon = humanWalkIconRef.current
		const circlePath = circlePathRef.current
    const arrowPath = arrowPathRef.current
    const headPath = headPathRef.current
    const humanPath = humanPathRef.current

    let pathLength = document.querySelector(".circle-path");
    let circlePathLength = pathLength.getTotalLength()

    gsap.fromTo(
      circlePath,
      { strokeDashoffset: circlePathLength },
      {
        strokeDashoffset: 0,
        duration: 3,
        scrollTrigger: {
          trigger: humanWalkIcon,
        }
      })

    let arrowSvgLength = document.querySelector(".arrow-path");
    let arrowPathLength = arrowSvgLength.getTotalLength()

    gsap.fromTo(
      arrowPath,
      { strokeDashoffset: arrowPathLength },
      {
        strokeDashoffset: 0,
        delay: 3,
        duration: 1,
        scrollTrigger: {
          trigger: humanWalkIcon,
        }
      })

    let headSvgPath = document.querySelector(".head-circle");
    let headPathLength = headSvgPath.getTotalLength()

    gsap.fromTo(
      headPath,
      { strokeDashoffset: headPathLength },
      {
        strokeDashoffset: 0,
        delay: 3,
        duration: 1,
        scrollTrigger: {
          trigger: humanWalkIcon,
        }
      })

    let humanSvgPath = document.querySelector(".human-path");
    let humanPathLength = humanSvgPath.getTotalLength()

    gsap.fromTo(
      humanPath,
      { strokeDashoffset: humanPathLength },
      {
        strokeDashoffset: 0,
        duration: 4,
        scrollTrigger: {
          trigger: humanWalkIcon,
        }
      })
	}, [])

	return (
		<>
		<section ref={humanWalkIconRef} >
      <svg viewBox="0 0 48 48" >
        <path
          ref={circlePathRef}
          className="circle-path"
          fill="none"
          stroke='#8ec73d'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeDasharray='109.83px'
          strokeDashoffset='109.83px'
          d="M14.98,41.8753a20.4839,20.4839,0,1,1,18.21-.0832"
        />
        <path
          ref={arrowPathRef}
          className="arrow-path"
          fill="none"
          stroke='#8ec73d'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeDasharray='9.502635955810547px'
          strokeDashoffset='9.502635955810547px'
          d="M31.8164,38.6064,29.8255,42.97,34.0715,45"
        />
        <circle
          ref={headPathRef}
          className="head-circle"
          fill="none"
          stroke='#8ec73d'
          strokeLinecap='round'
          strokeLinejoin='round'
          cx="25.3111"
          cy="12.1986"
          r="2.2096"/>
        <path
          ref={humanPathRef}
          className="human-path"
          fill="none"
          stroke='#8ec73d'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeDasharray='97.85px'
          strokeDashoffset='97.85px'
          d="M19.7031,30.2216l-2.9186,3.5558c-1.3981,1.618.62,3.0368,2.0995,1.6362l2.859-3.6012.9384-3.5211L24.19,29.8l1.0058,5.2074c.6653,1.4484,2.8278,1.3689,2.7575-.4942l-1.4908-5.5638-2.1363-3.7,1.1964-4.465,1.3349.3576a.7774.7774,0,0,0,.3879.7716c.465.2483,3.8078,1.2722,3.8078,1.2722,2.1028.6458,2.34-1.4709.6406-1.9639L28.91,20.4755l-1.378-2.2949-2.239-2.0056L21.87,16.0957l-4.8377,2.9207-1.7968,4.8018c-.3972,1.3419,1.5265,1.6913,2.058.6475.2582-.4581,1.5582-3.5518,1.5582-3.5518l2.8247-1.4015-1.3818,6.3337Z"
        />
      </svg>
		</section>
		</>
	)
}

export default DrawHumanWalkIcon
