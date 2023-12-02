import { useState, useRef, useEffect } from "react"
import logo from "../../../assets/logo/Logo-remove-bg-small.png"

import "./NavbarDesktop.css"
import { HashLink as Link } from 'react-router-hash-link'
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
		<nav
			className="navbar-desktop"
    	initial={{ y: `-100%` }}
    	animate={{ y: 0 }}
    	transition={{ duration: 2}}
			ref={navbarHeight}
		>
			<li>
				<motion.ul whileHover={{ scale: 1.1, y: 3 }}
          whileTap={{ scale: 0.9, y: 0 }}><Link to="/"><img src={logo} /></Link></motion.ul>
				<motion.ul whileHover={{ scale: 1.1, y: 3 }}
          whileTap={{ scale: 0.9, y: 0 }}><Link to="/#contact">Kontakt</Link></motion.ul>
				<motion.ul whileHover={{ scale: 1.1, y: 3 }}
          whileTap={{ scale: 0.9, y: 0 }}><Link to="/#services">Leistungsumfang</Link></motion.ul>
				<motion.ul whileHover={{ scale: 1.1, y: 3 }}
          whileTap={{ scale: 0.9, y: 0 }}><Link to="/#price">Preise</Link></motion.ul>
				<motion.ul whileHover={{ scale: 1.1, y: 3 }}
          whileTap={{ scale: 0.9, y: 0 }}><Link to="/#about">Über mich</Link></motion.ul>
			</li>
		</nav>
	)
}

export default NavbarDesktop
