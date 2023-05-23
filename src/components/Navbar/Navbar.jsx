import { useState } from "react"
import logo from "../../assets/logo/Logo-remove-bg-small.png"

import "./Navbar.css"
import Burger from "../Burger/Burger"

const Navbar = () => {
	const [openBurger, setOpenBurger] = useState(false)

	return (
		<nav className="navbar">
			<img src={logo} />
			<li>
				<ul>Home</ul>
				<ul>Kontakt</ul>
				<ul>Leistungsumfang</ul>
				<ul>Preise</ul>
				<ul>Über mich</ul>
			</li>
			<li onClick={() => setOpenBurger(!openBurger)}>
				<Burger isOpen={openBurger ? "--open" : ""} />
			</li>
		</nav>
	)
}

export default Navbar
