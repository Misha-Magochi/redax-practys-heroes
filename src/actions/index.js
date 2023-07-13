export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    };
};

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    };
};

export const heroesDeleted = (itemId) => {
    return {
        type: 'HEROES_DELETE',
        payload: itemId
    };
};

export const heroesAdded = (object) => {
    return {
        type: 'ADD_HEROES',
        payload: object
    };
};