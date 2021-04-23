import React, { useState } from "react";
import "./BurgerButton.scss";

import { Link } from "react-router-dom";

const BurgerButton = () => {
	const [string, setString] = useState(["bar1", "bar2", "bar3"]);

	function changeButton() {
		setString(["change bar1", "change bar2", "change bar3"]);
	}
	console.log(string[0]);
	console.log(string[1]);
	console.log(string[2]);
	return (
		<Link to="/burger-menu">
			<div className="container container-off" onClick={changeButton}>
				<div className={string[0]}></div>
				<div className={string[1]}></div>
				<div className={string[2]}></div>
			</div>
		</Link>
	);
};

export default BurgerButton;
