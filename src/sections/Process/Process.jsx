import { motion, useScroll } from "framer-motion"

import "./Process.css"

const Process = () => {
  const { scrollYProgress } = useScroll()

	return (
		<article className="process">
			<motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
		</article>
	)
}

export default Process
