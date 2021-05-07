import React, { useEffect, useState } from "react";
import "./ListOfBands.scss";

import Band from "./Band/Band";
import axios from "axios";

const URL = "https://felipe-portafolio-default-rtdb.firebaseio.com/bandas.json";

const ListOfBands = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		getList();
	}, []);

	const getList = () => {
		axios
			.get(URL)
			.then((res) => {
				const list = res.data;

				setList(
					list.map((band) => {
						return <Band key={band.id} band={band.banda} country={band.pais} />;
					})
				);
			})
			.catch((err) => {
				return <p>Cannot Find A Band</p>;
			});
	};

	return (
		<section className="list-of-bands-section">
			<div className="List-Bands">
				<h2>Bands</h2>
				<ul>{list}</ul>
			</div>
		</section>
	);
};

export default ListOfBands;
