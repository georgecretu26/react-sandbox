import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Projects from './../../containers/projects/index';
import About from './../../containers/about/index';


const navigationJSON = [
    {id: 1, url: '/', name: 'Homepage'},
    {id: 2, url: '/projects/', name: 'Projects'},
    {id: 3, url: '/about/', name: 'About'},
];

const Navigation = () => {
    return(
        <Router>
            <div>
                <ul>
                    {navigationJSON.map((navItem, index) => (
                        <li key={navItem.id}>
                            <Link to={navItem.url}>{navItem.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <NavigationRoute />
        </Router>
    );
}

const NavigationRoute = () => {
    return (
        <Fragment>
            <Route exact path="/" />
            <Route path="/about/" component={About} />
            <Route path="/projects/" component={Projects} />
        </Fragment>
    )
}

export default Navigation;