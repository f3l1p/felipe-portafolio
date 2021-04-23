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
				description="This website was made with React JS, with the intention of promote her album THE SPOTGLOW in 2019"
				contentR={theSpot}
				link="https://the-spotglow-land.web.app/"
			/>

			<RowCard
				title="W.L.4.Y"
				description="It`s a very simple quote machine, made for my girlfriend. The background color changes randomly with every random quote."
				contentR={wl4y}
				link="https://wl4y-d4258.web.app/"
			/>

			<RowCard
				title="Web Compras"
				description="An E-Commerce website made with Worpress."
				contentR={webCompras}
				link="https://webcompras.cl/"
			/>
		</section>
	);
};

export default webs;
