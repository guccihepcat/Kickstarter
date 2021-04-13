import React, { Component } from "react";
import Home from "./Home";
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./Create";
import Contribute from "./Contribute";


export default class Routes extends Component {
    render() {
        return (
            <Router history={createBrowserHistory}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Create" component={Create} />
                    <Route path="/Contribute" component={Contribute} />
                </Switch>
            </Router>
        )
    }
}