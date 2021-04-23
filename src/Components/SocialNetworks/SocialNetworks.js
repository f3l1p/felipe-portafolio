import React from "react";
import "./SocialNetworks.scss";

import { SocialIcon } from "react-social-icons";

const SocialNetworks = () => {
	return (
		<>
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
		</>
	);
};

export default SocialNetworks;
