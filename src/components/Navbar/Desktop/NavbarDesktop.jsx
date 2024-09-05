import { useRef, useEffect } from "react"
import logo from "../../../assets/logo/Logo-remove-bg-small.png"

import "./NavbarDesktop.css"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const NavbarDesktop = () => {
	const listHeight = useRef()

	const navbarHeight = useRef()

	useEffect(() => {
		if (!listHeight?.current?.clientHeight || !navbarHeight?.current?.clientHeight) return

		setLiHeight(listHeight?.current?.clientHeight)
		setHeaderHeight(navbarHeight?.current?.clientHeight)
	}, [listHeight?.current?.clientHeight, navbarHeight?.current?.clientHeight])

	return (
		<nav className="navbar-desktop" initial={{ y: `-110%` }} animate={{ y: 0 }} transition={{ duration: 2 }} ref={navbarHeight}>
			<ul>
				<motion.li whileHover={{ scale: 1.1, y: 3 }} whileTap={{ scale: 0.9, y: 0 }}>
					<HashLink to="/#hero">
						<img src={logo} />
					</HashLink>
				</motion.li>
				<motion.li whileHover={{ scale: 1.1, y: 3 }} whileTap={{ scale: 0.9, y: 0 }}>
					<HashLink to="/#contact">
						<h3>Kontakt</h3>
					</HashLink>
				</motion.li>
				<motion.li whileHover={{ scale: 1.1, y: 3 }} whileTap={{ scale: 0.9, y: 0 }}>
					<HashLink to="/#services">
						<h3>Leistungsumfang</h3>
					</HashLink>
				</motion.li>
				<motion.li whileHover={{ scale: 1.1, y: 3 }} whileTap={{ scale: 0.9, y: 0 }}>
					<Link to="/about">
						<h3>Über mich</h3>
					</Link>
				</motion.li>
			</ul>
		</nav>
	)
}

export default NavbarDesktop
