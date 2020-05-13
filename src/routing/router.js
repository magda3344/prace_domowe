import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function RouterExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/altkomFrame">altkom</Link>
                    </li>
                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/altkomFrame">
                        <Altkom/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

// function Home() {
// //     return (
// //         <div>
// //             <h2>Home</h2>
// //         </div>
// //     );
// // }

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>);
    }
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

const Altkom = () => {
    return (
        <div>
            <iframe src="https://www.altkomakademia.pl/" name="frame2" id="frame2" title="ifr">altkom</iframe>
        </div>
    );
}
