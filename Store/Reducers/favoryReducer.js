const initialiState = {favoritesFilm : []}

function toggleFavorite(state = initialiState, action){
    let nextState
    switch (action.type){
        case  'TOGGLE_FAVORITE':
            const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
            if(favoriteFilmIndex !==-1){
                //Suppression
                nextState = {
                    ...state,
                    favoritesFilm: state.favoritesFilm.filter((item, index) =>index !==favoriteFilmIndex)
                }
            }else {
                //Ajout
                nextState = {
                    ...state,
                    favoritesFilm : [...state.favoritesFilm, action.value]
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default toggleFavorite