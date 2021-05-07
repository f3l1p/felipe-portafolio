import React from "react";
import "./NavBar.scss";

import { NavLink } from "react-router-dom";

const NavBar = (props) => {
	return (
		<>
			<ul className={props.className}>
				<li className="menu-item align-middle">
					<NavLink
						exact
						to="/"
						style={{
							color: "inherit",
							textDecoration: "inherit",
						}}
						activeStyle={{ color: "#e54b4b" }}
					>
						HOME
					</NavLink>
				</li>

				<li className="menu-item">
					<NavLink
						to="/webs"
						style={{ color: "inherit", textDecoration: "inherit" }}
						activeStyle={{ color: "#e54b4b" }}
					>
						WEBS
					</NavLink>
				</li>
				<li className="menu-item">
					<NavLink
						to="/music"
						style={{ color: "inherit", textDecoration: "inherit" }}
						activeStyle={{ color: "#e54b4b" }}
					>
						MUSIC
					</NavLink>
				</li>
				<li className="menu-item">
					<NavLink
						to="/contact"
						style={{ color: "inherit", textDecoration: "inherit" }}
						activeStyle={{ color: "#e54b4b" }}
					>
						CONTACT
					</NavLink>
				</li>
			</ul>
		</>
	);
};

export default NavBar;
