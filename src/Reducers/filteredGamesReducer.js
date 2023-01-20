const filteredGamesReducers = (state, action) => {
    if (state === undefined) {
        return [];
    }
    
    if (action.type === "FILTEREDGAMES"){
        return action.payload;
    }
    return state;
}

export default filteredGamesReducers;