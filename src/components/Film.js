import '../css/App.css';
import React from 'react';

export default class Film extends React.PureComponent {
    render() {
        return (
            <div className="App">
                <div>
                    <img src={fI} alt="film" className="imgI"></img>
                </div>

                <div>
                    <h3 className="h2">Film in evidenza: </h3> <br></br>
                </div>

                <div id="carousel">
                    <div className="slide">
                        <img src={f1} alt="1" className="imgS"></img>
                    </div>
                    <div className="slide">
                        <img src={f2} alt="2" className="imgS"></img>
                    </div>
                    <div className="slide">
                        <img src={f3} alt="3" className="imgS"></img>
                    </div>
                    <div className="slide">
                        <img src={f4} alt="4" className="imgS"></img>
                    </div>
                    <div className="slide">
                        <img src={f5} alt="5" className="imgS"></img>
                    </div>
                    <div className="slide">
                        <img src={f6} alt="6" className="imgS"></img>
                    </div>
                    <div className="slide">
                        <img src={f7} alt="7" className="imgS"></img>
                    </div>
                </div>

                <div>
                    <h3 className="h2">Ultime uscite: </h3> <br></br>
                </div>

                <div id="carousel">
                    <div className="slide">
                        <img src={f1} alt="1" className="imgS"></img>
                    </div>
                    <div className="slide">
                        <img src={f2} alt="2" className="imgS"></img>
                    </div>
                    <div className="slide">
                        <img src={f3} alt="3" className="imgS"></img>
                    </div>
                    <div className="slide">
                        <img src={f4} alt="4" className="imgS"></img>
                    </div>
                    <div className="slide">
                        <img src={f5} alt="5" className="imgS"></img>
                    </div>
                    <div className="slide">
                        <img src={f6} alt="6" className="imgS"></img>
                    </div>
                    <div className="slide">
                        <img src={f7} alt="7" className="imgS"></img>
                    </div>
                </div>

                <div>
                    <h3 className="h2">Comedy: </h3> <br></br>
                </div>

                <div id="carousel">
                    <div className="slide">
                        <img src={f1} alt="1" className="imgS"></img>
                    </div>
                </div>


                <div>
                    <h3 className="h2">Drama: </h3> <br></br>
                </div>

                <div id="carousel">
                    <div className="slide">
                        <img src={f1} alt="1" className="imgS"></img>
                    </div>
                </div>

                <div>
                    <h3 className="h2">Fantasy: </h3> <br></br>
                </div>

                <div id="carousel">
                    <div className="slide">
                        <img src={f1} alt="1" className="imgS"></img>
                    </div>
                </div>

                <div>
                    <h3 className="h2">Science fiction: </h3> <br></br>
                </div>

                <div id="carousel">
                    <div className="slide">
                        <img src={f1} alt="1" className="imgS"></img>
                    </div>
                </div>

                <div>
                    <h3 className="h2">Thriller: </h3> <br></br>
                </div>

                <div id="carousel">
                    <div className="slide">
                        <img src={f1} alt="1" className="imgS"></img>
                    </div>
                </div>
            </div>
        )
    };
}
