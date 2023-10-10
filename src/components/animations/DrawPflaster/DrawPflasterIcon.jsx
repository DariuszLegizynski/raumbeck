import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const DrawPflasterIcon = () => {
  const pflasterIconRef = useRef(null)
	const outerPathRef = useRef(null)
  const innerPath1Ref = useRef(null)
  const innerPath2Ref = useRef(null)

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
    const pflasterIcon = pflasterIconRef.current
		const outerPath = outerPathRef.current
    const innerPath1 = innerPath1Ref.current
    const innerPath2 = innerPath2Ref.current

    let outerLineLength = document.querySelector(".outer-line");
    let outerPathLength = outerLineLength.getTotalLength()

    gsap.fromTo(
      outerPath,
      { strokeDashoffset: outerPathLength },
      {
        strokeDashoffset: 0,
        duration: 3,
        scrollTrigger: {
          trigger: pflasterIcon,
        }
      })

    let path1Length = document.querySelector(".inner-line-1");
    let innerPath1Length = path1Length.getTotalLength()

    gsap.fromTo(
      innerPath1,
      { strokeDashoffset: innerPath1Length },
      {
        strokeDashoffset: 0,
        delay: 3,
        duration: 1,
        scrollTrigger: {
          trigger: pflasterIcon,
        }
      })

    let path2Length = document.querySelector(".inner-line-2");
    let innerPath2Length = path2Length.getTotalLength()

    gsap.fromTo(
      innerPath2,
      { strokeDashoffset: innerPath2Length },
      {
        strokeDashoffset: 0,
        delay: 3,
        duration: 1,
        scrollTrigger: {
          trigger: pflasterIcon,
        }
      })
	}, [])

	return (
		<>
		<section ref={pflasterIconRef} >
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={outerPathRef}
          className="outer-line"
          fill="none"
          stroke='#8591a8'
          strokeDasharray='129.12484741210938px'
          strokeDashoffset='129.12484741210938px'
          d="M37,18.5H29.5V11a5.5,5.5,0,0,0-11,0v7.5H11a5.5,5.5,0,0,0,0,11h7.5V37a5.5,5.5,0,0,0,11,0V29.5H37a5.5,5.5,0,0,0,0-11Z"
        />
        <line
          ref={innerPath1Ref}
          className="inner-line-1"
          fill="none"
          stroke='#8591a8'
          strokeDasharray='11px'
          strokeDashoffset='11px'
          x1="29.4997"
          y1="29.5"
          x2="18.4997"
          y2="29.5"
        />
        <line
          ref={innerPath2Ref}
          className="inner-line-2"
          fill="none"
          stroke='#8591a8'
          strokeDasharray='11px'
          strokeDashoffset='11px'
          x1="18.4997"
          y1="18.5"
          x2="18.4997"
          y2="29.5"
        />
      </svg>
		</section>
		</>
	)
}

export default DrawPflasterIcon
