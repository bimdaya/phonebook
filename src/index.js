import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router';

import configureStore from './store/configureStore';
import App from './containers/app/App';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

const store = configureStore();

render(
	<ErrorBoundary>
	   <Provider store= { store }>
		   <App/>
	   </Provider>
   	</ErrorBoundary>,
	document.getElementById('root')
);
