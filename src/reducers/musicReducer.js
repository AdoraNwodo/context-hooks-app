import uuid from 'uuid/v1'

export const musicReducer = (state, action) => {
    switch(action.type){
        case 'ADD_MUSIC':
            return [...state, {
                title: action.music.title,
                artist: action.music.artist,
                id: uuid()
            }]
        case 'REMOVE_MUSIC':
            return state.filter( music => music.id !== action.id )
        default:
            return state
    }
}