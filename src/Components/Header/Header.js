import React from "react";
import "./Header.scss";

import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import BurgerButton from "../BurgerButton/BurgerButton";

const Header = () => {
	return (
		<header className="header">
			<Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
				<h2>FELIPE CHICANGANA</h2>
			</Link>

			<NavBar className="Lead-menu Lead-Menu-off" />

			<SocialNetworks />

			<BurgerButton />
		</header>
	);
};

export default Header;
