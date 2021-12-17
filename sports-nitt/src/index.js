import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Achievements from './pages/achievements/Achievements';
import Blogs from './pages/blogs/Blog';
import Teams from './pages/teamsPage/Team';

const Routing = () => {
  return(
    <Router>     
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/achievements" component={Achievements}/>
        <Route path="/blogs" component={Blogs}/>
        <Route path="/teams" component={Teams}/>
      </Switch>  
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
