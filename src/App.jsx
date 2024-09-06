import { Route, Routes } from "react-router-dom"

import NavbarMobile from "./components/Navbar/Mobile/NavbarMobile"
import NavbarDesktop from "./components/Navbar/Desktop/NavbarDesktop"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Privacy from "./pages/Privacy/Privacy"
import Impressum from "./pages/Impressum/Impressum"

const App = () => {
	return (
		<>
			<header>
				<NavbarMobile />
				<NavbarDesktop />
			</header>
			<main>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/privacy" element={<Privacy />} />
					<Route exact path="/impressum" element={<Impressum />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App
