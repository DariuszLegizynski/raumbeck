import logo from "../../assets/logo/Logo-remove-bg-small.png"

import "./Navbar.css"

const Navbar = () => {
	return (
		<nav className="navbar">
			<li>
				<img src={logo} />
				<ul>Home</ul>
				<ul>Kontakt</ul>
				<ul>Leistungsumfang</ul>
				<ul>Preise</ul>
				<ul>Über mich</ul>
			</li>
		</nav>
	)
}

export default Navbar
