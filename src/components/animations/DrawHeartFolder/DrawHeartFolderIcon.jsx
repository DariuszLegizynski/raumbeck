import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const DrawHeartFolderIcon = () => {
  const heartFolderIconRef = useRef(null)
	const upperPathRef = useRef(null)
  const folderPathRef = useRef(null)
  const heartPathRef = useRef(null)

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
    const heartFolderIcon = heartFolderIconRef.current
    const upperPath = upperPathRef.current
		const folderPath = folderPathRef.current
    const heartPath = heartPathRef.current

    let upperLength = document.querySelector(".upper")
    let upperPathLength = upperLength.getTotalLength()

    gsap.fromTo(
      upperPath,
      { strokeDashoffset: upperPathLength },
      {
        strokeDashoffset: 0,
        duration: 2,
        scrollTrigger: {
          trigger: heartFolderIcon,
        }
      })

    let folderLength = document.querySelector(".folder")
    let folderPathLength = folderLength.getTotalLength()

    gsap.fromTo(
      folderPath,
      { strokeDashoffset: folderPathLength },
      {
        strokeDashoffset: 0,
        duration:2,
        scrollTrigger: {
          trigger: heartFolderIcon,
        }
      })

    let heartLength = document.querySelector(".heart")
    let heartPathLength = heartLength.getTotalLength()

    gsap.fromTo(
      heartPath,
      { strokeDashoffset: heartPathLength },
      {
        strokeDashoffset: 0,
        delay: 2,
        duration: 1,
        scrollTrigger: {
          trigger: heartFolderIcon,
        }
      })
	}, [])

	return (
		<section ref={heartFolderIconRef} >
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={upperPathRef}
          className="upper"
          fill="none"
          stroke='#8591a8'
          strokeDasharray='92.21954345703125px'
          strokeDashoffset='92.21954345703125px'
          d="M41.68,13.015H24.77c-2-.1-5.93-4.23-8.19-4.23H6.68A2.18,2.18,0,0,0,4.5,10.9644c0,.0169,0,.0337.0006.0506h0v7.29h39v-3.42a1.83,1.83,0,0,0-1.79-1.87Z"
        />
        <path
          ref={folderPathRef}
          className="folder"
          fill="none"
          stroke='#8591a8'
          strokeDasharray='117.96983337402344px'
          strokeDashoffset='117.96983337402344px'
          d="M43.5,18.295H4.5v18.72a2.18,2.18,0,0,0,2.16,2.2l.01,0H41.32a2.18,2.18,0,0,0,2.18-2.18l0-.02h0Z"
        />
        <path
          ref={heartPathRef}
          className="heart"
          fill="none"
          stroke='#8591a8'
          strokeDasharray='36.75298309326172px'
          strokeDashoffset='36.75298309326172px'
          d="M21.2152,23.3A3.5695,3.5695,0,0,0,18.94,29.3855L24,34.4344l5.06-5.0489A3.574,3.574,0,0,0,24,24.3367,3.5823,3.5823,0,0,0,21.2152,23.3Z"
        />
      </svg>
		</section>
	)
}

export default DrawHeartFolderIcon
