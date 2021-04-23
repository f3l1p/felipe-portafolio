import React from "react";
import "./RowCard.scss";

const RowCard = (props) => {
	return (
		<div className="Card-Row">
			<div className="Col-Left">
				<div className="Text-Wrap">
					<h2>{props.title}</h2>
					<p>{props.description}</p>
					<a
						className="Link-Page"
						href={props.link}
						target="_blank"
						rel="noreferrer"
					>
						See Live!
					</a>
				</div>
			</div>
			<div className="Col-Right">
				<a href={props.link} target="_blank" rel="noreferrer">
					<img alt="wev-card" src={props.contentR}></img>
				</a>
			</div>
		</div>
	);
};

export default RowCard;
