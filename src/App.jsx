import { Route, Routes } from "react-router-dom"

import NavbarMobile from './components/Navbar/Mobile/NavbarMobile'
import NavbarDesktop from './components/Navbar/Desktop/NavbarDesktop'

import Home from "./pages/Home/Home"
import Prices from "./pages/Prices/Prices"
import About from "./pages/About/About"

const App = () => {
	return (
		<main>
			<NavbarMobile />
      <NavbarDesktop />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/prices" element={<Prices />} />
				<Route exact path="/about" element={<About />} />
			</Routes>
		</main>
	)
}

export default App
