import React from "react";
import "./SpotyEmbed.scss";

const spotyEmbed = () => {
	return (
		<div className="Embed-Spoty">
			<div className="Embed-Title">
				<h2>Producer Playlist</h2>
			</div>

			<iframe
				src="https://open.spotify.com/embed/playlist/0O98RXE3XTwaUFJjdD7vKR"
				width="700"
				height="500"
				frameBorder="0"
				allowtransparency="true"
				allow="encrypted-media"
				title="playlist"
			></iframe>
		</div>
	);
};

export default spotyEmbed;
