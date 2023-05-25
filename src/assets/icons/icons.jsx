const IconItem = ({ type, fillColor, width, height, classType }) => {
	return (
		<>
			{type === "straight-line" ? (
				<svg width={width} height={height} viewBox="0 0 3 1200" fill={fillColor} className={classType} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='xMidYMax meet'>
					<line x1="1.5" x2="1.5" y2="300" stroke="#8EC73D" strokeWidth="3" />
					<line x1="1.5" y1="300" x2="1.5" y2="600" stroke="#00D5FF" strokeWidth="3" />
					<line x1="1.5" y1="600" x2="1.5" y2="900" stroke="#FFCF94" strokeWidth="3" />
					<line x1="1.5" y1="900" x2="1.5" y2="1200" stroke="#BDFBFF" strokeWidth="3" />
				</svg>
			) : null}
		</>
	)
}

export default IconItem
