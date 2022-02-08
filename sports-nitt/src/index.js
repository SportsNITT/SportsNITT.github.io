import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import Sportsfete from './pages/sportfete/Sportsfete';
import ComingSoon from './pages/ComingSoon';
import Team from './pages/teamsPage/Team';
import Event from './pages/gallery/Event';
import Gallery from './pages/gallery/Gallery';
import Blog from './pages/blogs/Blog';
import FourOFour from './pages/FourOFour';

const Routing = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={App} />
				<Route exact path='/achievements' component={ComingSoon} />
				<Route exact path='/blogs' component={Blog} />
				<Route exact path='/gallery' component={Gallery} />
				<Route exact path='/infrastructure' component={ComingSoon} />
				<Route exact path='/teams' component={Team} />
				<Route exact path='/sportsfete' component={Sportsfete} />
				<Route path='*' component={FourOFour} />
			</Switch>
		</Router>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<Routing />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
