import "./Burger.css";

const Burger = ({ isOpen }) => {
	return (
		<div className={`burger burger${isOpen}`}>
			<div className="burger__stick" />
		</div>
	);
};

export default Burger;