import { motion } from "framer-motion"

import IconItem from '../../assets/icons/icons'

import "./Process.css"

const Process = () => {

  window.onload = () => {
    let path = document.querySelector("line")
    console.log(path)
    let pathLength = document.querySelector("line").getTotalLength()
  
    console.log(path, pathLength)
  
    path.style.strokeDasharray = pathLength + " " + pathLength
  }


  const container = {
		hidden: {
      opacity: 0,
      scale: 0,
    },
		visible:{
      opacity: 1,
      scale: 1,
    },
	}

	return (
		<article className="process">
			<section className="process__line-container">
      <IconItem type="straight-line" classType="process__svg" />
      </section>
      <motion.p
      className='process__show'
      variants={container}
      initial="hidden"
      whileInView="visible"
      transition={{duration: 0.6}}
      >HELLO</motion.p>
      <motion.p
      className='process__show'
      variants={container}
      initial="hidden"
      whileInView="visible"
      transition={{duration: 0.6}}
      >HELLO</motion.p>
      <motion.p
      className='process__show'
      variants={container}
      initial="hidden"
      whileInView="visible"
      transition={{duration: 0.6}}
      >HELLO</motion.p>
      <motion.p
      className='process__show'
      variants={container}
      initial="hidden"
      whileInView="visible"
      transition={{duration: 0.6}}
      >HELLO</motion.p>
		</article>
	)
}

export default Process
