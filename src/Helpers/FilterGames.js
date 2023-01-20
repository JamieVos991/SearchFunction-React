import {games} from "../Data/games";

export const filterGamesByTitle = (nameToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game => {
        if (game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1) {
            return game;
        }  
    });
}

export const filterGamesByPlatform = (platformToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game => {
        let found = false;
        game.platforms.forEach(platform => {
            if (platform.toUpperCase() === platformToBeSearched.toUpperCase( )) {
                found = true;
            }
        });
        if (found === true) {
            return game;
        }
    });
}