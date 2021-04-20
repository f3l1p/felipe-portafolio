import React from "react";
import "./Band.scss";

const Band = (props) => {
	return (
		<li>
			{props.band} <span>(</span>
			{props.country}
			<span>)</span>
		</li>
	);
};

export default Band;
