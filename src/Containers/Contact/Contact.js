import React from "react";
import "./Contact.scss";

import { SocialIcon } from "react-social-icons";
import SoundBetterIcon from "../../Components/SoundBetterIcon/SoundBetterIcon";

const contact = () => {
	return (
		<section className="Contact">
			<div className="Contact-Content">
				<h1>
					Contact Me<span>!</span>
				</h1>
				<br />

				<h4>I apreciate every comments or sugestion</h4>
				<br />
				<br />
				<div className="Button-Wrap">
					<button className="Gmail-Button">
						<SocialIcon
							target="_blank"
							network="email"
							url="https://mail.google.com/mail/?view=cm&fs=1&to=wnrad.f@gmail.com&su=&body="
							bgColor="#1C00ff00"
							fgColor="#f7ebe8"
							style={{ height: 100, width: 100 }}
						/>
					</button>
				</div>
			</div>
			<br />
			<SoundBetterIcon />
		</section>
	);
};

export default contact;
