import React, { useEffect, useState } from "react";
import "./VideoSection.scss";

import Video from "../../../Components/Video/Video";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

const URL = "https://felipe-portafolio-default-rtdb.firebaseio.com/videos.json";

const VideoSection = () => {
	const [list, setList] = useState([]);

	const playlistVideo = (
		<a
			rel="noopener noreferrer"
			target="_blank"
			href="https://www.youtube.com/playlist?list=PL6n0y8EjzoXZ79K9O7-xqcH987R3h2_AU"
		>
			Here!
		</a>
	);

	useEffect(() => {
		getList();
	}, []);

	const getList = () => {
		axios.get(URL).then((res) => {
			let videoList = res.data;
			console.log(videoList);
			setList(
				videoList.map((band) => {
					return (
						<Col>
							<Video url={band.link} />
						</Col>
					);
				})
			);
		});
	};

	return (
		<section className="video-section">
			<h2>Videos</h2>
			<p>For more videos visit: {playlistVideo}</p>
			<Container fluid>
				<Row xs={1} md={3} lg={3}>
					{list}
				</Row>
			</Container>
		</section>
	);
};

export default VideoSection;
