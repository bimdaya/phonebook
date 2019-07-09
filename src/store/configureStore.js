import {
	applyMiddleware,
	compose,
	createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import appReducer from '../reducers/appReducer';

const configureStore = (preloadedState) => {
	const store = createStore(
		appReducer,
		preloadedState,
		compose(applyMiddleware(
			thunk,
			promiseMiddleware,
			createLogger(),
		)),
	);
	return store;
};

export default configureStore;
