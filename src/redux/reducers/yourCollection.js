// Action Creator 
const HANDLE_ADD_CLICK = 'HANDLE_ADD_CLICK';
const HANDLE_REMOVE_CLICK = 'HANDLE_REMOVE_CLICK';
const TOGGLE_FILTER = 'TOGGLE_FILTER';
const FILTER_ALPHABET = 'FILTER_ALPHABET';
const FILTER_HP = 'FILTER_HP';
const FILTER_ATTACK = 'FILTER_ATTACK';
const FILTER_DEFENCE = 'FILTER_DEFENCE';
const FILTER_SPEED = 'FILTER_SPEED';
const FILTER_CURRENT = 'FILTER_CURRENT';

const initState = {
    collection: allStorage(),
    isFilterClicked: false,
    currentFilter: null
};

export const handleAddClick = (pokemon) => ({
    type: HANDLE_ADD_CLICK,
    pokemon
})

export const handleRemoveClick = (pokemon) => ({
    type: HANDLE_REMOVE_CLICK,
    pokemon
})

export const toggleFilter = () => ({
    type: TOGGLE_FILTER,
})

export const alphabetFilter = () => ({
    type: FILTER_ALPHABET,
})

export const hpFilter = () => ({
    type: FILTER_HP,
})

export const attackFilter = () => ({
    type: FILTER_ATTACK,
})

export const defenceFilter = () => ({
    type: FILTER_DEFENCE,
})

export const speedFilter = () => ({
    type: FILTER_SPEED,
})

// filterCode: 0 - alphabet filter; 1 - hp filter; 
// 2 - attack filter; 3 - defence filter; 4 - speed filter; 
export const currentFilterSetter = (filterCode) => ({
    type: FILTER_CURRENT,
    filterCode
})


const yourCollection = (state = initState, action) => {
    switch(action.type) {
        case HANDLE_ADD_CLICK: 
            setLocalStorage(action.pokemon);
            return {
                ...state,
                collection: [...state.collection, JSON.parse(getLocalStorage(action.pokemon))]
            }
        case HANDLE_REMOVE_CLICK: 
            removeLocalStorage(action.pokemon);
            return {
                ...state,
                collection: allStorage()
            }
        case TOGGLE_FILTER: 
            return {
                ...state,
                isFilterClicked: !state.isFilterClicked
            }
        case FILTER_ALPHABET: 
            return {
                ...state,
                collection: state.collection.sort((pokemon, prevPokemon) => {
                    if (pokemon.name > prevPokemon.name) {
                        return 1;
                    }
                    if (pokemon.name < prevPokemon.name) {
                        return -1;
                    }
                    return 0;
                })
            }
        case FILTER_HP: 
            return {
                ...state,
                collection: state.collection.sort((pokemon, prevPokemon) => {
                    if (pokemon.stats[0].base_stat < prevPokemon.stats[0].base_stat) {
                        return 1;
                    }
                    if (pokemon.stats[0].base_stat > prevPokemon.stats[0].base_stat) {
                        return -1;
                    }
                    return 0;
                })
            }
        case FILTER_ATTACK: 
            return {
                ...state,
                collection: state.collection.sort((pokemon, prevPokemon) => {
                    if (pokemon.stats[1].base_stat < prevPokemon.stats[1].base_stat) {
                        return 1;
                    }
                    if (pokemon.stats[1].base_stat > prevPokemon.stats[1].base_stat) {
                        return -1;
                    }
                    return 0;
                })
            }
        case FILTER_DEFENCE: 
            return {
                ...state,
                collection: state.collection.sort((pokemon, prevPokemon) => {
                    if (pokemon.stats[2].base_stat < prevPokemon.stats[2].base_stat) {
                        return 1;
                    }
                    if (pokemon.stats[2].base_stat > prevPokemon.stats[2].base_stat) {
                        return -1;
                    }
                    return 0;
                })
            }
        case FILTER_SPEED: 
            return {
                ...state,
                collection: state.collection.sort((pokemon, prevPokemon) => {
                    if (pokemon.stats[5].base_stat < prevPokemon.stats[5].base_stat) {
                        return 1;
                    }
                    if (pokemon.stats[5].base_stat > prevPokemon.stats[5].base_stat) {
                        return -1;
                    }
                    return 0;
                })
            }
        case FILTER_CURRENT: 
            return {
                ...state,
                currentFilter: action.filterCode
            }
        default:
            return state;
    }
}

export const setLocalStorage = (pokemon) => {
    localStorage.setItem(pokemon.name, JSON.stringify(pokemon));
}

export const removeLocalStorage = (pokemon) => {
    localStorage.removeItem(pokemon.name);
}

export const getLocalStorage = (pokemon) => {
    return localStorage.getItem(pokemon.name);
}

function allStorage() {

    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push(JSON.parse(localStorage.getItem(key)));
    }
    
    return archive;
}

export default yourCollection;