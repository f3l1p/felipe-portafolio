import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";

import Portafolio from "./Containers/Portafolio/Portafolio";

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Portafolio />
			</div>
		</BrowserRouter>
	);
};

export default App;
