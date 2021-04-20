import React from "react";
import ReactPlayer from "react-player";

import "./Video.scss";

const Video = (props) => {
	return (
		<ReactPlayer
			className="Video"
			width="30rem"
			height="20rem"
			controls
			url={props.url}
		/>
	);
};

export default Video;
