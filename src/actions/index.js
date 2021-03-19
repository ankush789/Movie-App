//actions are just a JS object
// type property is used in actions 
// {
//     type: ADD_MOVIES
//     movies: [m1,m2,m3]
// }
// {
//     type: DECREASE_COUNT
// }

//Action Types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';
export const SHOW_FAVORITES = 'SHOW_FAVORITES';


//Action Creators
export function addMovies(movies){
    return {
      type: ADD_MOVIES,
      movies
    }
}

export function addFavorites(movie){
    return {
      type: ADD_FAVORITES,
      movie
    }
}
export function removeFavorites(movie){
    return {
      type: REMOVE_FAVORITES,
      movie
    }
}
export function showFavorites(val){
    return {
      type: SHOW_FAVORITES,
      val
    }
}
export function handleMovieSearch(movie){
  const url = `https://www.omdbapi.com/?apikey=f6dd362c&t=${movie}`;

  return function (){
    fetch(url)
    .then(response => response.json())
    .then(movie => {
      console.log(movie);
    })
  }
}