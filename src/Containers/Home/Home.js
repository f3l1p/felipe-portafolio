import React from "react";
import "./Home.scss";

import Typing from "react-typing-animation";

const home = () => {
	return (
		<section className="Home">
			<div className="First-wrap">
				<Typing>
					<h1>
						Hello<span>!</span>
					</h1>
					<Typing.Delay ms={500} />
					<h1>
						I<span>'</span>m Felipe<span>!</span>
					</h1>
				</Typing>
			</div>
			<div className="Second-wrap">
				<ul>
					<Typing>
						<Typing.Delay ms={2500} />
						<li>Artist</li>
						<Typing.Delay ms={800} />
						<li>Music Producer</li>
						<Typing.Delay ms={800} />
						<li>Front End Web Dev</li>
						<Typing.Delay ms={800} />
						<li>Game Lover</li>
					</Typing>
				</ul>
			</div>
		</section>
	);
};

export default home;
