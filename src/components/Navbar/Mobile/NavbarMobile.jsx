import { useState, useRef, useEffect } from "react"
import logo from "../../../assets/logo/Logo-remove-bg-small.png"

import "./NavbarMobile.css"
import Burger from "../../Burger/Burger"
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
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
    	initial={{ y: `-110%` }}
    	animate={{ y: 0 }}
    	transition={{ duration: 2}}
			ref={navbarHeight}
		>
			<Link to="/"><img src={logo} /></Link>
			<ul ref={listHeight} style={{ top: openBurger ? headerHeight : -liHeight}}>
				<motion.li
          whileTap={{ scale: 0.9, y: 0 }}><Link to="/" onClick={() => setOpenBurger(!openBurger)}><h3>Home</h3></Link></motion.li>
				<motion.li
          whileTap={{ scale: 0.9, y: 0 }}><HashLink to="/#contact" onClick={() => setOpenBurger(!openBurger)}><h3>Kontakt</h3></HashLink></motion.li>
				<motion.li
          whileTap={{ scale: 0.9, y: 0 }}><HashLink to="/#services" onClick={() => setOpenBurger(!openBurger)}><h3>Leistungsumfang</h3></HashLink></motion.li>
				<motion.li
          whileTap={{ scale: 0.9, y: 0 }}><Link to="/prices" onClick={() => setOpenBurger(!openBurger)}><h3>Preise</h3></Link></motion.li>
				<motion.li
          whileTap={{ scale: 0.9, y: 0 }}><Link to="/about" onClick={() => setOpenBurger(!openBurger)}><h3>Über mich</h3></Link></motion.li>
			</ul>
			<div onClick={() => setOpenBurger(!openBurger)}>
				<Burger isOpen={openBurger ? "--open" : ""} />
			</div>
		</motion.nav>
	)
}

export default NavbarMobile
