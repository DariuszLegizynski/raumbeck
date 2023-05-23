import { useState, useRef, useEffect } from "react"
import logo from "../../assets/logo/Logo-remove-bg-small.png"

import "./Navbar.css"
import Burger from "../Burger/Burger"

const Navbar = () => {
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
		<nav ref={navbarHeight} className="navbar">
			<img src={logo} />
			<li ref={listHeight} style={{ top: openBurger ? headerHeight : -liHeight}}>
				<ul>Home</ul>
				<ul>Kontakt</ul>
				<ul>Leistungsumfang</ul>
				<ul>Preise</ul>
				<ul>Über mich</ul>
			</li>
			<div className="navbar__burger" onClick={() => setOpenBurger(!openBurger)}>
				<Burger isOpen={openBurger ? "--open" : ""} />
			</div>
		</nav>
	)
}

export default Navbar
