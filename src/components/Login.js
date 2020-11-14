import '../css/App.css';
import React from 'react'

export default class Login extends React.PureComponent {
    render() {
        return (
            <div className="App">
                <h3><center className="title">  LOGIN: </center></h3>

                <h3><center className="title">  User: </center></h3>
                <input type="text" className="input2" name="user" placeholder="username ..." /><br></br>
                <button type="submit" className="buttonL"> Login </button>

                <hr />

                <h3><center className="title">  REGISTRATION: </center></h3>

                <h3><center className="title">  User: </center></h3>
                <input type="text" className="input2" name="user" placeholder="username..." />

                <h3><center className="title">  Favourite genre: </center></h3>
                <select>
                    <option>Action</option>
                    <option>Science Fiction</option>
                    <option>Fantasy</option>
                    <option>Comedy</option>
                    <option>Drama</option>
                    <option>Thriller</option>
                </select><br></br>
                <button type="submit" className="buttonL"> Registration </button>

            </div>
        )
    };
}