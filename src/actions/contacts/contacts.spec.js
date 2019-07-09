import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';

import { getAllContactsAction } from './';
import { GET_CONTACTS } from '../../constants/actions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions for contacts', () => {
	const data = {
		'contacts': [
			{
				'contact_id': 1,
				'first_name': 'Bim',
				'last_name': 'Dayananda',
				'email': 'bim@gmail.com',
				'phone' : {
					'mobile': '123456789',
					'work': '123456789',
					'home': '123456789'
				},
				'address': 'TLL',
				'avatar': 'https://react.semantic-ui.com/images/avatar/small/rachel.png'
			}
		]
	};

	afterEach(() => {
		fetchMock.restore();
	})

	it('should create an action to get contacts from API', () => {
		fetchMock.getOnce('/contacts', {
			payload: data,
			headers: {
				'content-type': 'application/json'
			}
		});

		const expectedActions = [
			{
				type: GET_CONTACTS,
				payload: data
			}
		];

		const store = mockStore({contacts: {}});

		return store.dispatch(getAllContactsAction());
		expect(store.getActions()).toEqual(expectedActions);
	})
})
