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
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';



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
export function addMovieToList(movie){
  return {
    type: ADD_MOVIE_TO_LIST,
    movie
  }
}
export function handleMovieSearch(movie){
  const url = `https://www.omdbapi.com/?apikey=f6dd362c&t=${movie}`;

  return function (dispatch){
    fetch(url)
    .then(response => response.json())
    .then(movie => {
      console.log(movie);

      dispatch(addMovieSearchResult(movie));
    })
  }
};

export function addMovieSearchResult(movie){
  return {
    type: ADD_SEARCH_RESULT,
    movie
  };
}