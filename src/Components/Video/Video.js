import React from "react";
import ReactPlayer from "react-player";

import "./Video.scss";

const Video = (props) => {
	return (
		<div className="player-wrapper">
			<ReactPlayer
				className="video"
				width="100%"
				height="100%"
				controls
				url={props.url}
			/>
		</div>
	);
};

export default Video;
