import React from "react";
import "./ListOfBands.scss";

import Band from "./Band/Band";

const ListOfBands = () => {
	return (
		<section>
			<div className="List-Bands">
				<h2>Bands</h2>
				<ul>
					<Band band="The Spotglow " country="Colombia" />
					<Band band="Coctel Veneno " country="Chile" />
					<Band band="Nick Velped " country="Colombia" />
					<Band band="The Rocks " country="Colombia" />
					<Band band="Chendi Ou " country="Colombia" />
					<Band band="Echoes In Ears AKA Sin Circus " country="Colombia" />
					<Band band="Perdidos en Saturno " country="Colombia" />
					<Band band="JP " country="Australia" />
					<Band band="Leonardo Birabent " country="Colombia" />
					<Band band="Difamia" country="Colombia" />
				</ul>
			</div>
		</section>
	);
};

export default ListOfBands;
