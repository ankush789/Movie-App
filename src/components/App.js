import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, showFavorites} from '../actions';
import { connect} from 'react-redux';


class App extends React.Component {
  componentDidMount(){
 
    //MAKE API CALLS
    //Dispatch action
     this.props.dispatch(addMovies(data));
    // console.log('STATE', this.props.store.getState());
  }

    isMovieFavorite = (movie)=>{
        const {movies} = this.props;
        const index = movies.favorites.indexOf(movie);
        if(index !== -1){
            return true;
        }
        else{
            return false;
        }
    }
    onChangeTabs = (val)=>{
      this.props.dispatch(showFavorites(val));
    }
  render(){
      const {movies, search} = this.props; // {movies:{}, search: {}}
      const {list, favorites, showFavorites} = movies;// {list:[], favorites:[]}
      console.log('Render',this.props);
      const displayMovies = showFavorites? favorites: list;
      return (
        <div className="App">
            <Navbar dispatch = {this.props.dispatch} search={search}/>
            <div className="main">
                <div className="tabs">
                  <div className = {`tab ${showFavorites? '':'active-tabs'}`} onClick={()=>this.onChangeTabs(false)}>Movies</div>
                  <div className = {`tab ${showFavorites? 'active-tabs':''}`} onClick={()=>this.onChangeTabs(true)}>Favourites</div>
                </div>

                <div className="list">
                    {displayMovies.map((movie, index) =>
                      <MovieCard movie={movie} key={`movie-${index}`} dispatch = {this.props.dispatch}  fav = {this.isMovieFavorite(movie)}/>
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

//AppWrapper is a wrapper over the the App so that we can use Consumer in our App
//Component and pass store as props to the App
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//          { (store) => <App store = {store} />}
//       </StoreContext.Consumer>
//     )
//   }
// }

function mapStatetoProps(state){
  return {
    movies: state.movies,
    search: state.movies
  };
}
const connectedAppComponent = connect(mapStatetoProps)(App);
export default connectedAppComponent;
