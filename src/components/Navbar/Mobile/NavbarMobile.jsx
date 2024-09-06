import { useState, useRef, useEffect } from "react"
import logo from "../../../assets/logo/Logo-remove-bg-small.png"

import "./NavbarMobile.css"
import Burger from "../../Burger/Burger"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const NavbarMobile = () => {
	const [openBurger, setOpenBurger] = useState(false)

	const navRef = useRef(null)

	const handleClickOutside = event => {
		if (navRef.current && !navRef.current.contains(event.target)) {
			setOpenBurger(false)
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	return (
		<motion.nav className="navbar-mobile" initial={{ y: `-110%` }} animate={{ y: 0 }} transition={{ duration: 2 }} ref={navRef}>
			<HashLink to="/#hero" onClick={() => setOpenBurger(false)}>
				<img src={logo} />
			</HashLink>
			<ul className={`navbar-mobile-list ${openBurger ? "open" : "closed"}`}>
				<motion.li whileTap={{ scale: 0.9, y: 0 }}>
					<HashLink to="/#hero" onClick={() => setOpenBurger(!openBurger)}>
						<h3>Home</h3>
					</HashLink>
				</motion.li>
				<motion.li whileTap={{ scale: 0.9, y: 0 }}>
					<HashLink to="/#contact" onClick={() => setOpenBurger(!openBurger)}>
						<h3>Kontakt</h3>
					</HashLink>
				</motion.li>
				<motion.li whileTap={{ scale: 0.9, y: 0 }}>
					<HashLink to="/#services" onClick={() => setOpenBurger(!openBurger)}>
						<h3>Leistungsumfang</h3>
					</HashLink>
				</motion.li>
				<motion.li whileTap={{ scale: 0.9, y: 0 }}>
					<Link to="/about" onClick={() => setOpenBurger(!openBurger)}>
						<h3>Über mich</h3>
					</Link>
				</motion.li>
			</ul>
			<div onClick={() => setOpenBurger(!openBurger)}>
				<Burger isOpen={openBurger ? "--open" : ""} />
			</div>
		</motion.nav>
	)
}

export default NavbarMobile
