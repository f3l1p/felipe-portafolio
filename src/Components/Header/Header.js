import React, { useState, useEffect } from "react";
import "./Header.scss";

import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import BurgerButton from "../BurgerButton/BurgerButton";

const Header = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const breakPoint = 1450;

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);

		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);
	return (
		<header className="header">
			<Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
				<h2>FELIPE CHICANGANA</h2>
			</Link>

			<NavBar className="Lead-menu Lead-Menu-off" />

			{width > breakPoint ? <SocialNetworks /> : <BurgerButton />}
		</header>
	);
};

export default Header;
