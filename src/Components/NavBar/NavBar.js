import React from "react";
import "./NavBar.scss";

import { Link } from "react-router-dom";

const NavBar = (props) => {
	return (
		<>
			<ul className={props.className}>
				<li>
					<Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
						HOME
					</Link>
				</li>

				<li>
					<Link
						to="/webs"
						style={{ color: "inherit", textDecoration: "inherit" }}
					>
						<p>WEBS</p>
					</Link>
				</li>
				<li>
					<Link
						to="/music"
						style={{ color: "inherit", textDecoration: "inherit" }}
					>
						<p>MUSIC</p>
					</Link>
				</li>
				<li>
					<Link
						to="/contact"
						style={{ color: "inherit", textDecoration: "inherit" }}
					>
						<p>CONTACT</p>
					</Link>
				</li>
			</ul>
		</>
	);
};

export default NavBar;
