import './css/App.css';
import App from "./components/App";
import Login from "./components/Login";
import Film from "./components/Film";
import SerieTv from "./components/SerieTv";
import Preferiti from "./components/Preferiti";
import Search from "./components/Search";
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default class Main extends React.PureComponent {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        {/* <li><Link to="/">Login</Link></li> */}
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Film">Film</Link></li>
                        <li><Link to="/SerieTv">Serie-tv</Link></li>
                        <li><Link to="/Preferiti">Favourite</Link></li>
                        <li><Link to="/Search">Search</Link></li>
                    </ul>

                    <hr />

                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>

                        <Route exact path="/Home">
                            <App />
                        </Route>

                        <Route path="/Film">
                            <Film />
                        </Route>

                        <Route path="/SerieTv">
                            <SerieTv />
                        </Route>

                        <Route path="/Preferiti">
                            <Preferiti />
                        </Route>

                        <Route path="/Search">
                            <Search />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    };
}