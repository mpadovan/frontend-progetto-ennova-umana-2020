import '../css/App.css';
import React from 'react';
import axios from 'axios';
import Dialog from './Dialog';
import { host, nickname } from '../Context';

export default class SerieTv extends React.PureComponent {

    constructor(props) {
        super(props)
        this.handleDialog = this.handleDialog.bind(this);
    }

    state = {
        nickname: null,
        host: null,
        media: {
            popular: [],
            topByGenre: [],
            newReleases: [],
            topPopular: {},
        },
        dialog: false,
        clickedMedia: null,
    }

    componentDidMount() {
        this.setState({ nickname: nickname, host: host }, () => {
            axios.get(`http://localhost:3000/series/` + this.state.nickname)
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
        });
    }

    handleDialog(clickedMedia = null) {
        this.setState({ dialog: !this.state.dialog, clickedMedia: clickedMedia });
    }

    render() {
        return (
            <div>
                {
                    this.state.dialog === true && <Dialog media={this.state.clickedMedia}></Dialog>
                }
                {
                    this.state.dialog === true && <div className="close-dialog"><div style={{width:'fit-content', margin:'auto'}}><button className="close-dialog-button" onClick={this.handleDialog}>Close</button></div></div>
                }

                <div>
                    {/* { this.state.persons.map(person => <li>{person.name}</li>)} */}
                    {<img src={this.state.host + this.state.media.topPopular.media_image} alt="film" className="imgI" onClick={() => this.handleDialog(this.state.media.topPopular)}></img>}
                </div>
                {
                    this.state.media.topByGenre.length != 0 &&
                    <div>
                        <div>
                            <h3 className="h2">In base ai tuoi generi preferiti: </h3> <br></br>
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
                    {this.state.media.newReleases.map(media => <div className="slide" key={media.title + media.publishing_date}>
                        <img src={this.state.host + media.media_image} alt="2" className="imgS" onClick={() => this.handleDialog(media)}></img>
                    </div>)}
                </div>

                <div>
                    <h3 className="h2">Contenuti più popolari: </h3> <br></br>
                </div>

                <div id="carousel">
                    {this.state.media.popular.map(media => <div className="slide" key={media.title + media.publishing_date}>
                        <img src={this.state.host + media.media_image} alt="2" className="imgS" onClick={() => this.handleDialog(media)}></img>
                    </div>)}
                </div>
            </div>
        )
    }
}