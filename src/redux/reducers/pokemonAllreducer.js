import PokemonAPI from '../../api-service/pokemonAPI';
const UPDATE_INPUT = 'UPDATE_INPUT';
const SET_POKEMON = 'SET_POKEMON';
const SET_POKEMON_LOADING_STATUS = 'SET_POKEMON_LOADING_STATUS';
const SET_POKEMONS = 'SET_POKEMONS';
const SET_POKEMONS_SEARCH_RESULT = 'SET_POKEMONS_SEARCH_RESULT';
const SET_POKEMONS_SEARCH_STATUS = 'SET_POKEMONS_SEARCH_STATUS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_MAXIMUM_POKEMON_AMOUNT = 'SET_MAXIMUM_POKEMON_AMOUNT';
const SET_ALL_POKEMONS = 'SET_ALL_POKEMONS';
const GET_FETCHING_STATUS = 'GET_FETCHING_STATUS';
const SET_PREVIOUS_PAGE = 'SET_PREVIOUS_PAGE';
const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
const SET_IS_SEARCHING_STATUS = 'SET_IS_SEARCHING_STATUS';
const SET_POKEMONS_DEFAULT_STATUS = 'SET_POKEMONS_DEFAULT_STATUS';
const SET_POKEMONS_ARE_HERE = 'SET_POKEMONS_ARE_HERE';

const pokemonAPI = new PokemonAPI();

const initState = {
    areHere: false,
    pokemon: null,
    pokemonLoadingInProgress: true,
    pokemons: null,
    pokemonsAmount: null,
    pokemonsAll: null,
    pokemonsSearchResult: [],
    pokemonsOnPageLimit: 20,
    currentPokemonPage: 1,
    currentPokemonSearchValue: '',
    isFetching: false,
    isSearching: false,
    isSearchSuccess: false,
    isSearchDefault: false,
}

export const handlePokemonSearchValueChange = (text) => ({
    type: UPDATE_INPUT,
    text
});

export const setMaximumPokemonAmount = (pokemonsAmount) => ({
    type: SET_MAXIMUM_POKEMON_AMOUNT,
    pokemonsAmount
})

export const setAllPokemons = (pokemons) => ({
    type: SET_ALL_POKEMONS,
    pokemonsAll: pokemons
});

export const displayFetching = (fetchingStatus) => ({
    type: GET_FETCHING_STATUS,
    isFetching: fetchingStatus
});

export const setCurrentPage = (pageValue) => ({
    type: SET_CURRENT_PAGE,
    pageValue
});

export const previousPage = () => ({
    type: SET_PREVIOUS_PAGE
});

export const nextPage = () => ({
    type: SET_NEXT_PAGE
});

export const isSearchingCreator = (searchingStatus) => ({
    type: SET_IS_SEARCHING_STATUS,
    isSearching: searchingStatus
});

export const setPokemons = (pokemons) => ({
    type: SET_POKEMONS,
    pokemons
});

export const setPokemonSearchResult = (pokemon) => ({
    type: SET_POKEMONS_SEARCH_RESULT,
    pokemon
});

export const setPokemonSearchStatus = (status) => ({
    type: SET_POKEMONS_SEARCH_STATUS,
    status
});

export const setPokemonDefaultLoadingStatus = (status) => ({
    type: SET_POKEMONS_DEFAULT_STATUS,
    status
});

export const setPokemon = (pokemon) => ({
    type: SET_POKEMON,
    pokemon
});

export const setPokemonLoadingStatus = (status) => ({
    type: SET_POKEMON_LOADING_STATUS,
    isLoading: status
});

export const areAllPokemonsData = (areHere) => ({
    type: SET_POKEMONS_ARE_HERE,
    areHere
});

const pokemonReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_INPUT:
            return {
                ...state,
                currentPokemonSearchValue: action.text
            };  
        case SET_POKEMONS: 
            return {
                ...state,
                pokemons: [
                    ...action.pokemons
                ]
            };
        case SET_POKEMON: 
            return {
                ...state,
                pokemon: action.pokemon
            };
        case SET_POKEMON_LOADING_STATUS: 
            return {
                ...state,
                pokemonLoadingInProgress: action.isLoading
            };
        case SET_POKEMONS_SEARCH_RESULT:
            if (!action.pokemon) {
                return {
                    ...state,
                    pokemonsSearchResult: []
                }
            } 
            return {
                ...state,
                pokemonsSearchResult: [
                    ...state.pokemonsSearchResult.filter(pokemon => {
                        if (pokemon.id !== action.pokemon.id) {
                            if (pokemon.name.startsWith(state.currentPokemonSearchValue.trim().toLowerCase())) {
                                return pokemon;
                            }
                        }
                    }),
                    action.pokemon
                ]
            };
        case SET_POKEMONS_SEARCH_STATUS: 
            return {
                ...state,
                isSearchSuccess: action.status
            };
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPokemonPage: action.pageValue
            };
        case SET_MAXIMUM_POKEMON_AMOUNT:
            return {
                ...state,
                pokemonsAmount: action.pokemonsAmount
            }
        case SET_ALL_POKEMONS:
            return {
                ...state,
                pokemonsAll: action.pokemonsAll
            }    
        case GET_FETCHING_STATUS:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case SET_PREVIOUS_PAGE: {
            if (state.currentPokemonPage - 1 <= 0){
                return state
            }
            return {
                ...state,
                currentPokemonPage: 1
            }
        }
        case SET_NEXT_PAGE: {
            if (state.currentPokemonPage + 1 > Math.floor(state.pokemonsAmount / state.pokemonsOnPageLimit)) {
                return state;
            }
            return {
                ...state,
                currentPokemonPage: 52
            }
        }
        case SET_IS_SEARCHING_STATUS:
            return {
                ...state,
                isSearching: action.isSearching
            }
        case SET_POKEMONS_DEFAULT_STATUS:
            return {
                ...state,
                isSearchDefault: action.status
            }
        case SET_POKEMONS_ARE_HERE:
            return {
                ...state,
                areHere: action.areHere
            }
        default:
            return state;
    }
}

export function loadDefaultPokemonData(currentPage = 1) {
    const offSet = (currentPage - 1) * 20;
    return async (dispatch) => {
        dispatch(setPokemonDefaultLoadingStatus(true))
        return await pokemonAPI.getPokemonsInRange(offSet)
            .then((data) => {
                dispatch(setPokemons(data));
                dispatch(setPokemonDefaultLoadingStatus(false));
            });
    }
};

export function loadAllPokemonsData() {
    return async (dispatch) => {
        dispatch(displayFetching(true));
        return await pokemonAPI.getAllPokemons(100)
            .then(data => {
                dispatch(setAllPokemons(data));
                dispatch(displayFetching(false));
                dispatch(areAllPokemonsData(true));
            });
    }
};

export function searchPokemon(searchString) {
    return async (dispatch, getState) => {
        const allPokemons = getState().pokemonReducer.pokemonsAll;
        const numberOfLettersToStart = 3;

        if (searchString.length >= numberOfLettersToStart) {
            dispatch(setPokemonSearchStatus(false)) 
            allPokemons.forEach(async (pokemon) => {
                if (pokemon.name.startsWith(searchString.trim().toLowerCase())) {
                    pokemonAPI.getPokemonByID(pokemon.id)
                        .then(res => {
                            dispatch(setPokemonSearchResult(res));
                        });
                }
            });
            dispatch(setPokemonSearchStatus(true));
        }
        else {
            dispatch(setPokemonSearchResult(null));
        }
    }
};

export function setPokemonMaxAmount() {
    return async (dispatch) => {
        return await pokemonAPI.getPokemonLimit()
            .then((count) => {
                dispatch(setMaximumPokemonAmount(count));
            });
    }
};

export function getPokemonData(id) {
    return async (dispatch) => {
        return await pokemonAPI.getPokemonByID(id)
            .then((pokemon) => {
                dispatch(setPokemon(pokemon));
                dispatch(setPokemonLoadingStatus(false))
            });
    }
};

export default pokemonReducer;