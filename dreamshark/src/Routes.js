import React, { Component } from "react";
import Navigator from "./Navigator";
import { createBrowserHistory } from 'history';


export default class Routes extends Component {
    render() {
        return (
            <Router history={createBrowserHistory}>
                <Switch>
                    <Route path="/Navigator" exact component={Navigator} />
                </Switch>
            </Router>
        )
    }
}