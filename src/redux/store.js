import { combineReducers, createStore, applyMiddleware } from 'redux';
import pokemonReducer from './reducers/pokemonAllreducer.js';
import yourCollection from './reducers/yourCollection.js';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    pokemonReducer,
    yourCollection
});

const store = createStore(reducers, applyMiddleware(thunk));

window.state = store;

export default store;