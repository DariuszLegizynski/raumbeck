import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"

import "./ConsentBanner.css"

const ConsentBanner = () => {
	const [isBannerVisible, setIsBannerVisible] = useState(false)
	console.log({ isBannerVisible })
	const isCookie = Cookies.get("cookieConsent")
	useEffect(() => {
		console.log({ isCookie })
		setIsBannerVisible(isCookie ? false : true)
	}, [isCookie])

	const handleConsent = () => {
		Cookies.set("cookieConsent", "true", { expires: 30 })
		setIsBannerVisible(false)
	}

	return (
		<>
			{isBannerVisible ? (
				<article className="cookie-banner">
					<div className="cookie-banner__wrapper">
						<p className="cookie-banner__p">
							Um ein optimales Nutzererlebnis zu ermöglichen, werden Cookies gesetzt. Durch die weitere Nutzung dieser Website wird der{" "}
							<Link to="/privacy">Datenschutzerklärung</Link> zugestimmt.
						</p>
						<div className="cookie-banner__btn--wrapper">
							<button onClick={() => handleConsent()} className="cookie-banner__btn">
								Akzeptieren
							</button>
						</div>
					</div>
				</article>
			) : null}
		</>
	)
}

export default ConsentBanner
