export default function movies( state= [1,2], action){
    if(action.type === 'ADD_MOVIES'){
        return action.movies
    }
    return state;
}