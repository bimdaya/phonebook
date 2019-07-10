import React from 'react';
import {render as ren} from '@testing-library/react';
import App from './App';
import configureStore from '../../store/configureStore';
import {Provider} from 'react-redux';

describe('App', () => {
	it('should render app', () => {
		const store = configureStore({
			contacts: {
				data: {},
				fetching: false,
				fetched: false,
				failed: true
			}
		});
		const {container} = ren(
			<Provider store={store}>
				<App/>
			</Provider>
		);

		expect(container.querySelector('.app')).not.toBeNull();
	});

})
