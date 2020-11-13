import './App.css';
import React from 'react';
import axios from 'axios';
import Dialog from './Dialog';

const globalState = {
    nickname: "ChiaraT92",
    host: "http://localhost:3000/"
};

export default class App extends React.PureComponent {

    constructor(props) {
        super(props)
        this.handleDialog = this.handleDialog.bind(this);
    }

    state = {
        media: {
            popular: [],
            topByGenre: [],
            newReleases: [],
            topPopular: {}
        },
        dialog: false,
        clickedMedia: null
    }

    componentDidMount() {
        this.context = globalState;
        const context = this.context;
        this.setState({ nickname: context.nickname, host: context.host });
        axios.get(`http://localhost:3000/` + this.state.nickname)
            .then(res => {
                const media = res.data;
                this.setState(
                    {
                        media: {
                            popular: media.popular.filter((val, index) => {
                                if (index != 0) {
                                    return val
                                }
                            }),
                            topPopular: media.popular[0],
                            topByGenre: media.topByGenre,
                            newReleases: media.newReleases
                        }
                    })
                console.log(this.state.media);
            })
    }

    handleDialog(clickedMedia) {
        this.setState({ dialog: !this.state.dialog, clickedMedia: clickedMedia });
    }

    render() {
        return (
            <div>
                <ul>
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#film"> Film </a></li>
                    <li><a href="#serieTv">Serie-tv</a></li>
                    <li><a href="#preferiti">Preferiti</a></li>
                </ul>
                <form className="form">
                    <input type="text" name="search" placeholder="Search..." />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>

                {
                    this.state.dialog === true && <Dialog media={this.state.clickedMedia}></Dialog>
                }

                <div>
                    {/* { this.state.persons.map(person => <li>{person.name}</li>)} */}
                    {<img src={this.state.host + this.state.media.topPopular.media_image} alt="film" className="imgI" onClick={() => this.handleDialog(this.state.media.topPopular)}></img>}
                </div>
                {
                    this.state.media.topByGenre.length != 0 &&
                    <div>
                        <div>
                            <h3 className="h2">Altri contenuti in base ai tuoi generi preferiti: </h3> <br></br>
                        </div>
                        <div id="carousel">
                            {this.state.media.topByGenre.map(media => <div className="slide" key={media.title + media.publishing_date}>
                                <img src={this.state.host + media.media_image} alt="2" className="imgS" onClick={() => this.handleDialog(media)}></img>
                            </div>)}
                        </div>
                    </div>
                }


                <div>
                    <h3 className="h2">Ultime uscite: </h3> <br></br>
                </div>

                <div id="carousel">
                    {this.state.media.newReleases.map(media => <div className="slide">
                        <img src={this.state.host + media.media_image} alt="2" className="imgS" onClick={() => this.handleDialog(media)}></img>
                    </div>)}
                </div>

                <div>
                    <h3 className="h2">Contenuti più popolari: </h3> <br></br>
                </div>

                <div id="carousel">
                    {this.state.media.popular.map(media => <div className="slide">
                        <img src={this.state.host + media.media_image} alt="2" className="imgS" onClick={() => this.handleDialog(media)}></img>
                    </div>)}
                </div>
            </div>
        )
    }
}


