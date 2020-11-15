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
                    <ul style={{marginBottom: 10, overflow: 'auto'}}>
                        {/* <li><Link to="/">Login</Link></li> */}
                        <li style={{float:'left'}}><Link to="/Home"><span class="fa fa-home"></span></Link></li>
                        <li style={{float:'left'}}><Link to="/Film">Film <span class="fa fa-film"></span></Link></li>
                        <li style={{float:'left'}}><Link to="/SerieTv">Series <span class="fa fa-tv"></span></Link></li>
                        <li style={{float:'right'}}><Link to="/Search"><span class="fa fa-search"></span></Link></li>
                        <li style={{float:'right'}}><Link to="/Preferiti"><span class="fa fa-heart"></span></Link></li>
                    </ul>

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