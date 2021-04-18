import React from "react";
import "./Header.scss";

import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const header = () => {
	return (
		<header className="header">
			<h2>FELIPE CHICANGANA</h2>
			<ul className="Lead-menu">
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
			<ul className="Social-menu">
				<li>
					<SocialIcon
						target="_blank"
						network="facebook"
						url="https://www.facebook.com/FelipeChicanganaP"
						style={{ height: 40, width: 40 }}
					/>
				</li>

				<li>
					<SocialIcon
						target="_blank"
						network="instagram"
						url="https://www.instagram.com/felip_strn/"
						style={{ height: 40, width: 40 }}
					/>
				</li>
				<li>
					<SocialIcon
						target="_blank"
						network="linkedin"
						url="https://www.linkedin.com/in/felipechicangana/"
						style={{ height: 40, width: 40 }}
					/>
				</li>
				<li>
					<SocialIcon
						target="_blank"
						network="github"
						url="https://github.com/f3l1p"
						style={{ height: 40, width: 40 }}
						bgColor="#f7ebe8"
					/>
				</li>
			</ul>
		</header>
	);
};

export default header;
