import React from "react";
import "./BurgerMenu.scss";

import NavBar from "../../Components/NavBar/NavBar";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
	return (
		<section className="Menu">
			<div className="burger-menu-wrap">
				<ul>
					<li>
						<Link
							to="/"
							style={{ color: "inherit", textDecoration: "inherit" }}
						>
							HOME
						</Link>
					</li>
					<span className="line"></span>
					<li>
						<Link
							to="/webs"
							style={{ color: "inherit", textDecoration: "inherit" }}
						>
							<p>WEBS</p>
						</Link>
					</li>
					<span className="line"></span>
					<li>
						<Link
							to="/music"
							style={{ color: "inherit", textDecoration: "inherit" }}
						>
							<p>MUSIC</p>
						</Link>
					</li>
					<span className="line"></span>
					<li>
						<Link
							to="/contact"
							style={{ color: "inherit", textDecoration: "inherit" }}
						>
							<p>CONTACT</p>
						</Link>
					</li>
					<span className="line"></span>
				</ul>
			</div>
		</section>
	);
};

export default BurgerMenu;
