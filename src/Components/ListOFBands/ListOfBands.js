import React, { useEffect, useState } from "react";
import "./ListOfBands.scss";

import Band from "./Band/Band";
import axios from "axios";

const URL = "https://felipe-portafolio-default-rtdb.firebaseio.com/Bandas.json";

const ListOfBands = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		getList();
	}, []);

	//JSON.stringify(list)

	const getList = () => {
		axios
			.get(URL)
			.then((res) => {
				//console.log(res.data);
				const list = res.data;
				setList(
					list.map((band) => {
						return (
							<Band key={band.id} band={band.nombre} country={band.pais} />
						);
					})
				);
			})
			.catch((err) => {
				console.log(err);
				return <p>Cannot Find A Band</p>;
			});
	};

	//console.log(list);

	return (
		<section>
			<div className="List-Bands">
				<h2>Bands</h2>
				<ul>{list}</ul>
			</div>
		</section>
	);
};

export default ListOfBands;
