import React from "react";
import "./Webs.scss";

import RowCard from "../../Components/RowCard/RowCard";

import theSpot from "../../assets/the-spotglow-land.png";
import webCompras from "../../assets/web-compras.png";
import wl4y from "../../assets/wl4y.png";

const webs = () => {
	return (
		<section className="Webs">
			<RowCard
				title="Spotglow Land"
				description="
				This site was created with React JS as a promotion for the album THE SPOTGLOW which was released in 2019.
				I worked with a design team to prototype and understand the visual needs the band wanted to achieve in programming."
				contentR={theSpot}
				link="https://the-spotglow-land.web.app/"
			/>

			<RowCard
				title="W.L.4.Y"
				description="One of my personal React JS projects I did mainly for my girlfriend, was to create a random quote machine that would show phrases from movies and series that she enjoys. In addition to that it will also change the background randomly."
				contentR={wl4y}
				link="https://wl4y-d4258.web.app/"
			/>

			<RowCard
				title="Web Compras"
				description="As part of my growth in web development, I managed to work for the Chilean company Web Compras developing its E-Commerce with wordpress and connecting it with bluehost."
				contentR={webCompras}
				link="https://webcompras.cl/"
			/>
		</section>
	);
};

export default webs;
