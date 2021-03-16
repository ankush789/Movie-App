import {ADD_MOVIES, ADD_FAVORITES} from '../actions';

const initialMovieState = {
    list: [],
    favorites: []
}

export default function movies( state = initialMovieState, action){
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
        default:
            return state;     
    }
}