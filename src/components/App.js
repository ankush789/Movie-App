import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, showFavorites} from '../actions';

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
    onChangeTabs = (val)=>{
      const {store} = this.props;
      store.dispatch(showFavorites(val));
    }
  render(){
      const {list, favorites, showFavorites} = this.props.store.getState();// {list:[], favorites:[]}
      console.log('Render',this.props.store.getState());
      const displayMovies = showFavorites? favorites: list;
      return (
        <div className="App">
            <Navbar />
            <div className="main">
                <div className="tabs">
                  <div className = {`tab ${showFavorites? '':'active-tabs'}`} onClick={()=>this.onChangeTabs(false)}>Movies</div>
                  <div className = {`tab ${showFavorites? 'active-tabs':''}`} onClick={()=>this.onChangeTabs(true)}>Favourites</div>
                </div>

                <div className="list">
                    {displayMovies.map((movie, index) =>
                      <MovieCard movie={movie} key={`movie-${index}`} dispatch = {this.props.store.dispatch} store={this.props.store} fav = {this.isMovieFavorite(movie)}/>
                    )}
                </div>
                {
                  displayMovies.length === 0 ? <div className="no-movies">No movies to display!</div>: null
                }
            </div>
        </div>
      );
  }
}
export default App;
