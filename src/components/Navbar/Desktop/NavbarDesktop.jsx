import logo from "../../../assets/logo/Logo-remove-bg-small.png"

import "./NavbarDesktop.css"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const NavbarDesktop = () => {
	return (
		<nav className="navbar-desktop" initial={{ y: `-110%` }} animate={{ y: 0 }} transition={{ duration: 2 }}>
			<ul>
				<motion.li whileHover={{ scale: 1.1, y: 3 }} whileTap={{ scale: 0.9, y: 0 }}>
					<HashLink to="/#hero">
						<img src={logo} />
					</HashLink>
				</motion.li>
				<motion.li whileHover={{ scale: 1.1, y: 3 }} whileTap={{ scale: 0.9, y: 0 }}>
					<HashLink to="/#contact">
						<p>Kontakt</p>
					</HashLink>
				</motion.li>
				<motion.li whileHover={{ scale: 1.1, y: 3 }} whileTap={{ scale: 0.9, y: 0 }}>
					<HashLink to="/#services">
						<p>Leistungsumfang</p>
					</HashLink>
				</motion.li>
				<motion.li whileHover={{ scale: 1.1, y: 3 }} whileTap={{ scale: 0.9, y: 0 }}>
					<Link to="/about">
						<p>Über mich</p>
					</Link>
				</motion.li>
			</ul>
		</nav>
	)
}

export default NavbarDesktop
