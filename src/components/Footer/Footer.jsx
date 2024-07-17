import "./Footer.css"

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer>
			<p>&copy; {currentYear} Anna Mehr</p>
			<p>Webdesign by Dariusz Legizynski</p>
		</footer>
	)
}

export default Footer
