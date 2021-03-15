import {ADD_MOVIES} from '../actions';

const initialMovieState = {
    list: [],
    favorites: []
}

export default function movies( state = initialMovieState, action){
    if(action.type === ADD_MOVIES){
        return {
            list: action.movies,
            favorites: []
        }
    }
    return state;
}