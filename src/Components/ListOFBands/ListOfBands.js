import React from "react";
import "./ListOfBands.scss";

const listOfBands = () => {
	return (
		<section>
			<div className="List-Bands">
				<h2>Bands</h2>
				<ul>
					<li>
						The Spotglow <span>(</span>Colombia<span>)</span>
					</li>
					<li>
						Coctel Veneno <span>(</span>Chile<span>)</span>
					</li>
					<li>
						Nick Velped <span>(</span>Colombia<span>)</span>
					</li>
					<li>
						The Rocks <span>(</span>Colombia<span>)</span>
					</li>
					<li>
						Chendi Ou <span>(</span>Colombia<span>)</span>
					</li>
					<li>
						Echoes In Ears AKA Sin Circus <span>(</span>Colombia<span>)</span>
					</li>
					<li>
						Perdidos en Saturno <span>(</span>Colombia<span>)</span>
					</li>
					<li>
						JP <span>(</span>Australia<span>)</span>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default listOfBands;
