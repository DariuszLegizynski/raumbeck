import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home/Home"

const App = () => {
	return (
		<main>
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</main>
	)
}

export default App
