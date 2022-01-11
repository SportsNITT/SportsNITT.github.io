import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	HashRouter,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import Achievements from "./pages/achievements/Achievements";
import Blogs from "./pages/blogs/Blog";
import Gallery from "./pages/gallery/Gallery";
import Events from "./pages/gallery/Event";
import Teams from "./pages/teamsPage/Team";
import CarouselImg from "./pages/home/Carousel";
import Home from "./pages/home/Home";
import Sportsfete from "./pages/sportfete/Sportsfete";
import ComingSoon from "./pages/ComingSoon";

const Routing = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/achievements" component={ComingSoon} />
				<Route path="/blogs" component={Blogs} />
				<Route path="/gallery" component={ComingSoon} />
				<Route path="/teams" component={ComingSoon} />
				<Route path="/events" component={ComingSoon} />
				<Route path="/sportsfete" component={Sportsfete} />
			</Switch>
		</Router>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<Routing />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
