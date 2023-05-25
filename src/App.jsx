import { useRef } from "react"
// import { LocomotiveScrollProvider } from "react-locomotive-scroll"

import Home from "./pages/Home/Home"

// import "locomotive-scroll/dist/locomotive-scroll.css"


const App = () => {
	const containerRef = useRef(null)

	return (
		// <LocomotiveScrollProvider
		// 	options={{
		// 		smooth: true,
		// 		// ... all available Locomotive Scroll instance options
		// 		smartphone: {
		// 			smooth: true,
		// 		},
		// 		tablet: {
		// 			smooth: true,
		// 		},
		// 	}}
		// 	watch={
		// 		[
		// 			//..all the dependencies you want to watch to update the scroll.
		// 			//  Basicaly, you would want to watch page/location changes
		// 			//  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
		// 		]
		// 	}
		// 	containerRef={containerRef}
		// >
			<main data-scroll-container ref={containerRef}>
				<Home />
			</main>
		// </LocomotiveScrollProvider>
	)
}

export default App

