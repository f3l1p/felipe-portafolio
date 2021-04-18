import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Contact.scss";

const contact = () => {
	return (
		<section className="Contact">
			<h1>
				Contact Me<span>!</span>
			</h1>
			<br />
			<h4>I apreciate every comments or sugestion</h4>
			<br />
			<div className="Button-Wrap">
				<button className="Gmail-Button">
					<SocialIcon
						target="_blank"
						network="email"
						url="https://mail.google.com/mail/?view=cm&fs=1&to=wnrad.f@gmail.com&su=SUBJECT&body=BODY"
						bgColor="#1C00ff00"
						fgColor="#f7ebe8"
						style={{ height: 100, width: 100 }}
					/>
				</button>
				<button className="Whatsapp-Button">
					<SocialIcon
						target="_blank"
						url="https://wa.me/573219652186"
						network="whatsapp"
						bgColor="#1C00ff00"
						fgColor="#f7ebe8"
						style={{ height: 100, width: 100 }}
					/>
				</button>
			</div>
		</section>
	);
};

export default contact;
