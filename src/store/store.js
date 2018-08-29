import {createStore} from 'redux';
import reducers from '../reducers/index.js';
import DevTools from '../DevTools.js';
import {getCountries} from '../actions/actions.js';

const store = createStore(
    reducers,
    DevTools.instrument()
);

store.dispatch(getCountries());

export default store;
