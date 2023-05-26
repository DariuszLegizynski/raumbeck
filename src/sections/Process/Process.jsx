import { motion } from "framer-motion"

import "./Process.css"

const Process = () => {

	const container = {
		hidden: {
			opacity: 0,
			scale: 0,
		},
		visible: {
			opacity: 1,
			scale: 1,
		},
	}

	return (
		<article className="process">
			<motion.p className="process__show" variants={container} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }}>
				HELLO
			</motion.p>
			<motion.p className="process__show" variants={container} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }}>
				HELLO
			</motion.p>
			<motion.p className="process__show" variants={container} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }}>
				HELLO
			</motion.p>
			<motion.p className="process__show" variants={container} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }}>
				HELLO
			</motion.p>
		</article>
	)
}

export default Process
