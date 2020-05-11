import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import MyForm from "./formularz";

export default function Router() {
    return (<Router>
        <div>
            <ul>
                <li>
                    <Link to="/formularz">Formularz</Link>
                </li>

            </ul>
            <hr/>
            <Switch>
                <Route exact path="/">
                    <About/>
                </Route>
                <Route path="/formularz">
                    <Formularz/>
                </Route>

            </Switch>
        </div>
    </Router>
    );
}

function About() {
    return (
        <div>
            <h2>Something about me</h2>
        </div>
    );
}
