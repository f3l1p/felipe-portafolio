import React from "react";
import "./Portafolio.scss";

import Header from "../../Components/Header/Header";
import Home from "../Home/Home";
import Webs from "../Webs/Webs";
import Music from "../Music/Music";
import Contact from "../Contact/Contact";
import Footer from "../../Components/Footer/Footer";

import { Route, Switch } from "react-router-dom";

const portafolio = () => {
	return (
		<div className="portafolio-wrapper">
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/webs" component={Webs} />
				<Route path="/music" component={Music} />
				<Route path="/contact" component={Contact} />
			</Switch>
			<Footer />
		</div>
	);
};

export default portafolio;
