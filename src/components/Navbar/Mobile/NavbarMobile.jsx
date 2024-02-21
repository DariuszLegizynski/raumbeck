import { useState, useRef, useEffect } from "react"
import logo from "../../../assets/logo/Logo-remove-bg-small.png"

import "./NavbarMobile.css"
import Burger from "../../Burger/Burger"
import { HashLink as Link } from 'react-router-hash-link'
import { motion } from "framer-motion"

const NavbarMobile = () => {
	const [ openBurger, setOpenBurger ] = useState(false)

	const listHeight = useRef()
	const [ liHeight, setLiHeight ] = useState(0)

  const navbarHeight = useRef()
  const [ headerHeight, setHeaderHeight ] = useState(0)

	useEffect(() => {
		if (!listHeight?.current?.clientHeight || !navbarHeight?.current?.clientHeight) return

		setLiHeight(listHeight?.current?.clientHeight)
    setHeaderHeight(navbarHeight?.current?.clientHeight)
	}, [listHeight?.current?.clientHeight, navbarHeight?.current?.clientHeight])

	return (
		<motion.nav
			className="navbar-mobile"
    	initial={{ y: `-100%` }}
    	animate={{ y: 0 }}
    	transition={{ duration: 2}}
			ref={navbarHeight}
		>
			<Link to="/"><img src={logo} /></Link>
			<li ref={listHeight} style={{ top: openBurger ? headerHeight : -liHeight}}>
				<motion.ul whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}><Link to="/">Home</Link></motion.ul>
				<motion.ul whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}><Link to="/#contact">Kontakt</Link></motion.ul>
				<motion.ul whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}>Leistungsumfang</motion.ul>
				<motion.ul whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}><Link to="/prices">Preise</Link></motion.ul>
				<motion.ul whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}>Über mich</motion.ul>
			</li>
			<div onClick={() => setOpenBurger(!openBurger)}>
				<Burger isOpen={openBurger ? "--open" : ""} />
			</div>
		</motion.nav>
	)
}

export default NavbarMobile
