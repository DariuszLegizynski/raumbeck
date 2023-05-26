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
			{type === "brezier-line" ? (
				<svg width={width} height={height} viewBox="0 0 127 1278" fill={fillColor} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='xMidYMax meet'>
					<path className={classType} d="M60 0V49C60 64.6667 58.2 97.8 51 105C42 114 4 155 3 196C2.2 228.8 40.6667 262.333 60 275C75.6667 286.333 110.2 317.6 123 352C135.8 386.4 86.3333 439.667 60 462C41 473 3 505.6 3 548C3 590.4 41 621.667 60 632C81 642.333 123 676.4 123 730C123 783.6 81 815 60 824C36.6667 834.667 -7.4 870 3 926C13.4 982 45.3333 1006.67 60 1012C75.6667 1020.67 110.2 1048.6 123 1091C135.8 1133.4 97.6667 1176.67 77 1193C71.3333 1199.67 60 1217.6 60 1236C60 1254.4 60 1271.67 60 1278" stroke="black"/>
				</svg>
			) : null}
		</>
	)
}

export default IconItem
