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

//Action Creators
export function addMovies(movies){
    return {
      type: ADD_MOVIES,
      movies
    }
}