import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import "./DrawHumanWalk.css"

const DrawPathSVG = () => {
	const pathRef = useRef(null)

  

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		// let element = pathRef.current

		// let svg = document.querySelector(".svg-path-1")
    // const length = svg.getTotalLength()
		// pathRef.current.style.display = 'none'

    let path = document.querySelector(".svg-path-1");
    let length1 = path.getTotalLength()
    console.log({length1})

    let path2 = document.querySelector(".svg-path-2");
    let length2 = path2.getTotalLength()
    console.log({length2})

    let path3 = document.querySelector(".svg-path-3");
    let length3 = path3.getTotalLength()
    console.log({length3})

		// let t1 = gsap.timeline({
    //   scrollTrigger: {
		// 		trigger: element,
    //     start:"top center",
    //     end:"bottom center",
    //     onUpdate: (self) => {
		// 			pathRef.current.style.display = 'inline-block'
    //       let draw = length - length * self.progress
    //       svg.style.strokeDasharray = length
		// 			svg.style.strokeDashoffset = draw
    //     },
    //   },
    // });

		// return () => {
		// 	if(t1) t1.kill();
		// }
	}, [])



	return (
		<>
		<section className="humanWalk" ref={pathRef}>
      <svg viewBox="0 0 48 48">
        <path
          className="svg-path-1"
          fill="none"
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeDasharray='109.83px'
          strokeDashoffset='109.83px'
          d="M14.98,41.8753a20.4839,20.4839,0,1,1,18.21-.0832"
        />
        <path
          className="svg-path-2"
          fill="none"
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeDasharray='9.5px'
          strokeDashoffset='9.5px'
          d="M31.8164,38.6064,29.8255,42.97,34.0715,45"
        />
        <circle
          className="svg-circle"
          fill="none"
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          cx="25.3111"
          cy="12.1986"
          r="2.2096"/>
        <path
          className="svg-path-3"
          fill="none"
          stroke='#000000'
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

export default DrawPathSVG
