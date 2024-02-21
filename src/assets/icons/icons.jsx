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
			{type === "location" ? (
				<svg width={width} height={height} fill={fillColor} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><path d="M12 27.2C12 46.4 32 56 32 56s20-9.6 20-28.8C52 16.6 43.05 8 32 8s-20 8.6-20 19.2z"/><circle cx="32" cy="26.88" r="6.88"/></svg>
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
			{type === 'check_circle' ? (
				<svg viewBox="0 0 24 24" width={width} height={height} fill={fillColor} xmlns="http://www.w3.org/2000/svg">
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
					<g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#8ec73d" strokeWidth="1.5"></circle>
					<path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#8ec73d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
					</g>
				</svg>
			) : null }
			{type === 'check' ? (
				<svg viewBox="0 0 24 24" width={width} height={height} fill={fillColor} xmlns="http://www.w3.org/2000/svg">
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						<g id="Interface / Check">
							<path id="Vector" d="M6 12L10.2426 16.2426L18.727 7.75732" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
						</g>
					</g>
				</svg>
			) : null }
			{type === 'exercise_short' ? (
				<svg width={width} height={height} fill={fillColor} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve">
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						<path stroke={strokeColor} d="M3.87,30.371c-0.04,0-0.079-0.001-0.119-0.003c-0.031-0.002-0.062-0.005-0.094-0.008H1v-0.72h1.334 c-0.308-0.38-0.46-0.856-0.431-1.352c0.031-0.526,0.264-1.008,0.656-1.356l9.081-9.082v-6.58c0-1.487,0.889-2.782,2.24-3.373 c-0.825-0.658-1.342-1.704-1.342-2.804c0-1.904,1.548-3.453,3.452-3.453s3.453,1.549,3.453,3.453c0,0.967-0.399,1.891-1.056,2.547 H28.5c1.025,0,1.86,0.834,1.86,1.86s-0.835,1.86-1.86,1.86h-9.14v6.28h4.031c1.085,0,1.969,0.884,1.969,1.97v8.89 c0,0.429-0.146,0.825-0.392,1.14H31v0.721H4.081C4.011,30.367,3.94,30.371,3.87,30.371z M23.5,29.64c0.629,0,1.14-0.511,1.14-1.14 v-8.891c0-0.688-0.56-1.249-1.248-1.249H19c-0.199,0-0.36-0.161-0.36-0.36v-7c0-0.199,0.161-0.36,0.36-0.36h9.5 c0.629,0,1.14-0.512,1.14-1.14s-0.511-1.14-1.14-1.14H17.244c-0.17,0-0.317-0.119-0.352-0.285c-0.036-0.166,0.05-0.334,0.206-0.403 c0.972-0.433,1.624-1.469,1.624-2.579c0-1.507-1.226-2.733-2.732-2.733s-2.732,1.226-2.732,2.733c0,1.109,0.652,2.146,1.624,2.579 c0.143,0.063,0.228,0.211,0.211,0.367c-0.017,0.155-0.131,0.282-0.284,0.314c-1.465,0.31-2.449,1.482-2.449,2.918V18 c0,0.096-0.038,0.188-0.105,0.255l-9.202,9.201c-0.263,0.234-0.411,0.54-0.431,0.875c-0.02,0.334,0.091,0.654,0.312,0.902 c0.2,0.225,0.469,0.367,0.767,0.406h0.337c0.244-0.032,0.472-0.136,0.659-0.302l9.056-8.599c0.067-0.063,0.156-0.1,0.248-0.1h8 c0.199,0,0.36,0.161,0.36,0.36v7.5C22.36,29.129,22.871,29.64,23.5,29.64z M5.422,29.64h16.609c-0.245-0.314-0.392-0.711-0.392-1.14 v-7.14h-7.496L5.422,29.64z M10,11.36H3.5c-1.025,0-1.86-0.834-1.86-1.86S2.475,7.64,3.5,7.64H11v0.72H3.5 c-0.628,0-1.14,0.512-1.14,1.14s0.512,1.14,1.14,1.14H10V11.36z"></path>
						<rect width="32" height="32"></rect>
					</g>
				</svg>
			) : null }
			{type === 'exercise_long' ? (
				<svg width={width} height={height} fill={fillColor} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve">
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						<path stroke={strokeColor} d="M29.095,30.64c0.051-0.065,0.098-0.136,0.141-0.21c0.249-0.431,0.314-0.932,0.187-1.411 c-0.128-0.477-0.434-0.877-0.862-1.125c-0.002-0.001-0.002-0.003-0.004-0.004l-10.25-5.953c-0.661-0.524-0.954-1.051-0.949-1.707 v-6.227c0-1.202-0.547-2.312-1.412-3.029c0.654-0.157,1.256-0.518,1.706-1.053c1.14-1.355,0.966-3.385-0.389-4.525 c-0.835-0.703-1.957-0.932-3.001-0.617c-0.19,0.058-0.298,0.259-0.24,0.449c0.058,0.19,0.262,0.297,0.449,0.24 c0.81-0.248,1.679-0.068,2.327,0.478c1.05,0.885,1.185,2.459,0.301,3.511c-0.603,0.718-1.557,1.032-2.467,0.822 c-0.049-0.014-0.098-0.027-0.147-0.038c-0.186-0.046-0.381,0.069-0.431,0.259c-0.05,0.189,0.061,0.383,0.249,0.437 c0.049,0.015,0.099,0.027,0.149,0.04c1.273,0.368,2.185,1.619,2.185,3.027v6.224c-0.006,0.885,0.381,1.607,1.265,2.304l10.293,5.982 h0.001c0.263,0.152,0.452,0.398,0.531,0.692c0.078,0.294,0.038,0.601-0.114,0.865c-0.314,0.544-1.013,0.729-1.566,0.412 l-13.141-7.087c-0.145-0.075-3.545-1.902-3.545-6.182V2.5c0-0.628,0.512-1.14,1.14-1.14s1.14,0.512,1.14,1.14V11h0.72V2.5 c0-1.025-0.834-1.86-1.86-1.86S9.64,1.475,9.64,2.5v14.714c0,4.727,3.773,6.737,3.928,6.817l12.254,6.608H6.969 c0.245-0.314,0.391-0.711,0.391-1.14v-7.14H10V21.64H7c-0.199,0-0.36,0.161-0.36,0.36v7.5c0,0.629-0.512,1.14-1.14,1.14 s-1.14-0.511-1.14-1.14V21c0-0.797,0.843-1.64,1.64-1.64h3v-0.72H6c-1.191,0-2.36,1.169-2.36,2.36v8.5 c0,0.429,0.146,0.825,0.391,1.14H1v0.721h30V30.64H29.095z"></path>
						<rect width="32" height="32"></rect>
					</g>
				</svg>
			) : null }
		</>
	)
}

export default IconItem
