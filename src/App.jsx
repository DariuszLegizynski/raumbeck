import { Route, Routes } from "react-router-dom"

import NavbarMobile from "./components/Navbar/Mobile/NavbarMobile"
import NavbarDesktop from "./components/Navbar/Desktop/NavbarDesktop"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home/Home"
import Prices from "./pages/Prices/Prices"
import About from "./pages/About/About"

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
					<Route exact path="/prices" element={<Prices />} />
					<Route exact path="/about" element={<About />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App
