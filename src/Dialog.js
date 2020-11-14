import React from 'react';
import axios from 'axios';
import './Dialog.css'
import { host, nickname } from "./Context";

export default class Dialog extends React.PureComponent {

    constructor(props) {
        super();
        this.addToFav = this.addToFav.bind(this);
        this.addToPurchases = this.addToPurchases.bind(this);
        this.addRating = this.addRating.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.state = {
            avgRating: null,
            isFav: null,
            reviews: [],
            rating: 1,
            comment: '',
            bought: false,
        }
    }

    addToFav() {
        axios.post(`http://localhost:3000/favourite/${nickname}/${this.props.media.title}/${this.props.media.publishing_date}`)
            .then(res => {
                if (res.data.error == undefined) {
                    const isFav = res.data;
                    this.setState({ isFav: true })
                }
            });
    }

    addToPurchases() {
        axios.post(`http://localhost:3000/purchase/${nickname}/${this.props.media.title}/${this.props.media.publishing_date}`, { comment: this.state.comment, rating: this.state.rating })
            .then(res => {
                if (res.data.error == undefined) {
                    const purchase = res.data;
                    this.setState({ bought: purchase.purchase, });
                }
            });
    }

    addRating() {
        axios.post(`http://localhost:3000/rating/${nickname}/${this.props.media.title}/${this.props.media.publishing_date}`, { comment: this.state.comment, rating: this.state.rating })
            .then(res => {
                if (res.data.error == undefined) {
                    const reviews = this.manageReview(res.data);
                    this.setState({ reviews: reviews.reviews, });
                }
            });
    }

    handleRatingChange(event) {
        this.setState({ rating: event.target.value })
    }

    handleCommentChange(event) {
        this.setState({ comment: event.target.value })
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/rating/${nickname}/${this.props.media.title}/${this.props.media.publishing_date}`)
            .then(res => {
                const rating = res.data;
                this.setState({ avgRating: rating.avg })
            })
        axios.get(`http://localhost:3000/is_favourite/${nickname}/${this.props.media.title}/${this.props.media.publishing_date}`)
            .then(res => {
                const isFav = res.data;
                this.setState({ isFav: isFav.isFav })
            })
        axios.get(`http://localhost:3000/reviews/${nickname}/${this.props.media.title}/${this.props.media.publishing_date}`)
            .then(res => {
                const reviews = this.manageReview(res.data);
                this.setState({ reviews: reviews.reviews, })
            })
        axios.get(`http://localhost:3000/has_purchased/${nickname}/${this.props.media.title}/${this.props.media.publishing_date}`)
            .then(res => {
                if (res.data.error == undefined) {
                    const bought = res.data;
                    this.setState({ bought: bought.bought })
                }
            })
    }

    manageReview(reviews = []) {
        reviews.reviews.forEach((element, i) => {
            reviews.reviews[i].stars = [];
            for (let index = 0; index < element.rating; index++) {
                reviews.reviews[i].stars.push(index);
            }
        });
        return reviews;
    }

    render() {
        return (<div className='modal'>
            <div className='modal__overlay'></div>
            <div className='modal__content'>
                <p className="banner" style={{ backgroundImage: `url(${host + this.props.media.media_image})` }}></p>
                <p className="title">{this.props.media.title}</p>
                <p className="buttons">
                    <button disabled={!this.props.media.available} onClick={this.addToPurchases}>{this.state.bought == false ? 'Buy ' + this.props.media.price + '€' : 'Play'}</button>
                    <button disabled={this.state.isFav == 1} onClick={this.addToFav}>Favourites</button>
                </p>
                <p className="rating">
                    <span className="desc">Average rating: </span>{this.state.avgRating != null ? this.state.avgRating : 'N/A'}
                </p>
                <p className="description">
                    {this.props.media.media_description}
                </p>
                <p>
                    <span className="desc">Director: </span>{this.props.media.director_name}
                </p>
                <p>
                    <span className="desc">Actors: </span>{this.props.media.actors}
                </p>
                <p>
                    <span className="desc">Total views: </span>{this.props.media.views_count}
                </p>
                <p>
                    <span className="desc">Genre: </span>{this.props.media.genre}
                </p>


                <div>
                    <p className="rating">
                        <span className="desc">Add a rating:</span>
                    </p>
                    <div className="addRating">
                        <select className="rating-item-select" value={this.state.rating} onChange={this.handleRatingChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <input type="textarea" col="2" className="rating-item-input" value={this.state.comment} onChange={this.handleCommentChange}></input>
                        <button className="rating-item-button" onClick={this.addRating}>Add Rating</button>
                    </div>
                </div>
                <div style={{ textTransform: 'none' }} className="reviews-wrapper">
                    <p className="rating" style={{ display: this.state.reviews.length == 0 ? 'none' : 'inherit' }}>
                        <span className="desc">Reviews</span>
                    </p>
                    {this.state.reviews.map(review =>
                        <div className="comment-wrapper" key={review.user_nickname}>
                            <div className="">{review.user_nickname} said:</div>
                            <div>
                                <div style={{ display: 'flex', padding: '5px 0' }}>{review.stars.map(star => <span className="fa fa-star checked" key={star}></span>)}</div>
                                <div>{review.comment}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>);
    }
}