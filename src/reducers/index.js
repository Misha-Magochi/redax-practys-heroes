const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    object: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROES_DELETE':
  /*           const heroes = action.payload */
            const updatedItems = state.heroes.filter
            (heroes => heroes.id !== action.payload);
            return{
                ...state,
                heroes: updatedItems
            }
        case 'ADD_HEROES':
            return {
                ...state,
                object: action.payload,
            };

        default: return state;
    }
}

export default reducer;