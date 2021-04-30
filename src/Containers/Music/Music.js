import React, { useState } from "react";
import "./Music.scss";

import SpotyEmbed from "../../Components/SpotyEmbed/SpotyEmbed";
import ListOfBands from "../../Components/ListOFBands/ListOfBands";
import Videos from "./VideoSection/VideoSection";
import { Short, Complete } from "../../assets/MusicBioText/MusicBioText";

const Music = () => {
	const [Hidden, setHidden] = useState(false);

	return (
		<>
			<section className="Music">
				<div className="First-Section">
					<div className="Text-Wrap">
						<h2>Bio</h2>
						<br />
						{Hidden ? Complete : Short}
						<p>
							{Hidden ? (
								<span className="Read-More" onClick={() => setHidden(false)}>
									read less
								</span>
							) : (
								<span className="Read-More" onClick={() => setHidden(true)}>
									read more...
								</span>
							)}
						</p>
					</div>
					<div className="Embed-Wrap">
						<SpotyEmbed />
					</div>
				</div>
				<ListOfBands />
				<Videos />
				<div className="Soundbetter-wrap">
					<a
						href="https://soundbetter.com/profiles/28111-felipe-chicangana"
						rel="noopener noreferrer"
						target="_blank"
						title="Felipe Chicangana profile on SoundBetter"
					>
						<img
							className="Soundbetter"
							alt="Felipe Chicangana, Producer on SoundBetter"
							src="https://d2p6ecj15pyavq.cloudfront.net/assets/SoundBetterBadge-1bc672131a12c38bd822195fbe5d0e17.svg"
						/>
					</a>
				</div>
			</section>
		</>
	);
};

export default Music;
