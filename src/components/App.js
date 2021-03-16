import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
     this.forceUpdate();
    });
    console.log('BEFORE STATE', this.props.store.getState());

    //MAKE API CALLS
    //Dispatch action
     store.dispatch(addMovies(data));
    console.log('STATE', this.props.store.getState());
  }

    isMovieFavorite = (movie)=>{
        const {favorites} = this.props.store.getState();
        const index = favorites.indexOf(movie);
        if(index !== -1){
            return true;
        }
        else{
            return false;
        }
    }
  render(){
      const {list} = this.props.store.getState();// {list:[], favorites:[]}
      console.log('Render',this.props.store.getState());
      return (
        <div className="App">
        <Navbar />
        <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>

        <div className="list">
            {list.map((movie, index) =>
              <MovieCard movie={movie} key={`movie-${index}`} dispatch = {this.props.store.dispatch} store={this.props.store} fav = {this.isMovieFavorite(movie)}/>
            )}
        </div>
        </div>
        </div>
      );
  }
}
export default App;
