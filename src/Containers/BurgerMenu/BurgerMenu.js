import React from "react";
import "./BurgerMenu.scss";

import { Link } from "react-router-dom";
import SocialNetworks from "../../Components/SocialNetworks/SocialNetworks";

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
				<br />
				<div>
					<SocialNetworks />
				</div>
			</div>
		</section>
	);
};

export default BurgerMenu;
