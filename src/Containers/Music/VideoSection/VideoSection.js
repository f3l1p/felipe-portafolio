import React from "react";
import Video from "../../../Components/Video/Video";
import "./VideoSection.scss";

const VideoSection = () => {
	const playlistVideo = (
		<a href="https://www.youtube.com/playlist?list=PL6n0y8EjzoXZ79K9O7-xqcH987R3h2_AU">
			Here!
		</a>
	);
	return (
		<section className="Video-section">
			<h2>Videos</h2>
			<p>For more videos visit: {playlistVideo}</p>
			<div className="Video-col">
				<div className="Video-row">
					<Video url="https://www.youtube.com/watch?v=VzD3wL0R8TM&ab_channel=EchoesInEarsBand" />
					<Video url="https://www.youtube.com/watch?v=-oje8ZK08rk&ab_channel=NickVelPed" />
					<Video url="https://www.youtube.com/watch?v=_VNpkrA92pI&ab_channel=Coct%C3%A9lVeneno-Topic" />
				</div>
				<div className="Video-row">
					<Video url="https://www.youtube.com/watch?v=giwjH9RXDMg&ab_channel=THESPOTGLOW" />
					<Video url="https://www.youtube.com/watch?v=6PcAxEfX1rs&ab_channel=THESPOTGLOW" />
					<Video url="https://www.youtube.com/watch?v=s5NSlX-j8O0&ab_channel=EchoesInEarsBand" />
				</div>
				<div className="Video-row">
					<Video url="https://www.youtube.com/watch?v=kCe2ixVjybQ&ab_channel=DifamiaBanda" />
					<Video url="https://www.youtube.com/watch?v=4wBd83E1Te0&ab_channel=leonardobirabent" />
					<Video url="https://www.youtube.com/watch?v=x1sH5IZj6w4&ab_channel=NickVelPed" />
				</div>
			</div>
		</section>
	);
};

export default VideoSection;
