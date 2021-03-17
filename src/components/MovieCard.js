import React from 'react';
import { addFavorites, removeFavorites } from '../actions';

class MovieCard extends React.Component {
    handleFavoriteClick = () =>{
        const { movie } = this.props;  
        this.props.dispatch(addFavorites(movie));
    }
    handleUnfavoriteClick = () =>{
        const {movie} = this.props;
       this.props.dispatch(removeFavorites(movie));
    }

    render(){
        const { movie } = this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster}></img>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imbdRating}</div>
                        {
                        this.props.fav?
                        <button className="unfavourite-btn" onClick= {this.handleUnfavoriteClick}>unfavourite</button>:
                        <button className="favourite-btn" onClick= {this.handleFavoriteClick}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;