import {combineReducers} from 'redux';
import {
    ADD_MOVIES, 
    ADD_FAVORITES, 
    REMOVE_FAVORITES, 
    SHOW_FAVORITES,
    ADD_MOVIE_TO_LIST,
    ADD_SEARCH_RESULT
    } from '../actions';

const initialMovieState = {
    list: [],
    favorites: [],
    showFavorites: false
}

export function movies( state = initialMovieState, action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVORITES:
            //action.movie will contain the current selected movie to add it to the favorite array
            //...state.favorites will retain all the previously selected movies in the favorite movie array             
            return {
                ...state,
                favorites: [action.movie, ...state.favorites,]
            }
        case REMOVE_FAVORITES:
            const filteredArray = state.favorites.filter((movie) =>action.movie.Title !== movie.Title);
            return {
                ...state,
                favorites: filteredArray
            }
        case SHOW_FAVORITES:
            return {
                ...state,
                showFavorites: action.val
            }
            case ADD_MOVIE_TO_LIST:
                return {
                    ...state,
                    list: [action.movie, ...state.list]
                }    
        default:
            return state;     
    }
}
const initialSearchState = {
    result: {},
    showSearchResults: false
}
export function search(state = initialSearchState,action){
       switch(action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true
            }
             case ADD_MOVIE_TO_LIST:
                return {
                    ...state,
                    showSearchResults:false
                }   
        default:
            return state;     
    }
}
// const initialRootState = {
//     movies:initialMovieState,
//     search: initialSearchState
// };
// export default function rootReducer (state = initialRootState ,action){
//     return{
//         movies: movies(state.movies,action),
//         search: search(state.search,action)
//     }
// }

export default combineReducers({
    movies,
    search
});