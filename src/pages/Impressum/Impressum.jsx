import { HashLink as Link } from "react-router-hash-link"

import "./Impressum.css"

const Impressum = () => {
	return (
		<article className="impressum">
			<h1 className="impressum__title">Impressum</h1>
			<section>
				<Link to="/#contact" className="btn btn--back">
					&larr; zurück
				</Link>
			</section>
		</article>
	)
}

export default Impressum
