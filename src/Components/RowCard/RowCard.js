import React from "react";
import "./RowCard.scss";

const RowCard = (props) => {
	return (
		<div className="Card-Row">
			<div className="Col-Left">
				<div className="Text-Wrap">
					<h2>{props.title}</h2>
					<p>{props.description}</p>
				</div>
			</div>
			<div className="Col-Right">
				<img alt="wev-card" src={props.contentR}></img>
			</div>
		</div>
	);
};

export default RowCard;
