import React, { useState } from "react";
import "./Music.scss";

import SpotyEmbed from "../../Components/SpotyEmbed/SpotyEmbed";
import ListOfBands from "../../Components/ListOFBands/ListOfBands";
import Videos from "./VideoSection/VideoSection";
import { Short, Complete } from "../../assets/MusicBioText/MusicBioText";
import SoundBeterIcon from "../../Components/SoundBetterIcon/SoundBetterIcon";

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
				<SoundBeterIcon />
			</section>
		</>
	);
};

export default Music;
