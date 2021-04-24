import React, { useState } from "react";
import "./Music.scss";

import SpotyEmbed from "../../Components/SpotyEmbed/SpotyEmbed";
import ListOfBands from "../../Components/ListOFBands/ListOfBands";
import Videos from "./VideoSection/VideoSection";

const Music = () => {
	const [Hidden, setHidden] = useState(false);
	const ShortText = (
		<p>
			My pasion with music begins from very early age. That pasion enrolls me to
			learn to play diferents instruments and study music production in “Escuela
			de musica y audio Fernando Sor” in Bogota DC.
			<br /> <br /> I have the privilege to worck and knows diferents artist
			from the world and always keep in mind to help them to achive their goals.
			<br /> <br />
		</p>
	);

	const CompletedText = (
		<p>
			My pasion with music begins from very early age. That pasion enrolls me to
			learn to play diferents instruments and study music production in “Escuela
			de musica y audio Fernando Sor” in Bogota DC.
			<br /> <br /> I have the privilege to work and knows diferents artist from
			the world and always keep in mind to help them to achive their goals.
			<br /> <br /> In the present I am the leader and lead singer of the band
			Perdidos en Saturno. <br /> <br /> I am the leader and lead singer from
			the band Perdidos en Saturno. and have the privilege to work in bands as
			Spotglow (colomnbia), Sin Circus AKA Echoes in Ears. <br /> <br />I invite
			you to listen to some of the songs that I have had the pleasure of working
			on.
			<br />
			<br />
		</p>
	);

	return (
		<>
			<section className="Music">
				<div className="First-Section">
					<div className="Text-Wrap">
						<h2>Bio</h2>
						<br />
						{Hidden ? CompletedText : ShortText}
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
