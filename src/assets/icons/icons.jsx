const IconItem = ({ type, fillColor, strokeColor, width, height, classType, pathClass }) => {
	return (
		<>
			{type === "phone" ? (
				<svg width={width} height={height} fill={fillColor} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><path d="M24 56a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4c-8 0-8-8-8-12s0-12 8-12a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4C14 8 8 12 8 32s6 24 16 24z"/><path d="M47.4 52a27.33 27.33 0 0 0 0-38.63"/><path d="M39.67 44.27a16.38 16.38 0 0 0 0-23.17"/><path d="M32 36.55a5.47 5.47 0 0 0 0-7.73"/></svg>
			) : null}
			{type === "email" ? (
				<svg width={width} height={height} fill={fillColor} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><rect x="8" y="12" width="48" height="40"/><polyline points="56 20 32 36 8 20"/></svg>
			) : null}
			{type === "home" ? (
				<svg width={width} height={height} fill={fillColor} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><polygon points="8 24 8 56 56 56 56 24 32 8 8 24"/><polyline points="40 56 40 36 24 36 24 56"/></svg>
			) : null}
			{type === "vector" ? (
				<svg width={width} height={height} viewBox="0 0 52 365" fill={fillColor} className={classType} xmlns="http://www.w3.org/2000/svg">
					<path
						className={pathClass}
						d="M26 314C10.5 314 1 322.5 1 338.5C1 354.5 10 364.5 26 364.5M26 364.5C42 364.5 50.9016 356.4 50.5 338.5C50.0984 320.6 27.3356 321.68 26 338.5V364.5ZM26 0V314.5"
						stroke="black"
					/>
				</svg>
			) : null}
		</>
	)
}

export default IconItem
