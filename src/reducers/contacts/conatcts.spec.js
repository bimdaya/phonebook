import getContactsReducer from './';
import {
	GET_CONTACTS_PENDING,
	GET_CONTACTS_FULFILLED,
	GET_CONTACTS_REJECTED,
} from '../../constants/actions';

describe('contacts reducer', () => {
    const initialState = {
    	data: {},
    	fetching: false,
    	fetched: false,
    	failed: false,
    };

	it('should return the initial state', () => {
		expect(getContactsReducer(undefined, {})).toEqual(initialState);
	})

	it('should handle GET_CONTACTS_PENDING', () => {
		expect(
			getContactsReducer(initialState, {
				type: GET_CONTACTS_PENDING,
			})
		).toEqual({
			data: {},
			fetching: true,
			fetched: false,
			failed: false,
		})
	})

    it('should handle GET_CONTACTS_FULFILLED', () => {
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

		expect(
			getContactsReducer(initialState, {
				type: GET_CONTACTS_FULFILLED,
                payload: data
			})
		).toEqual({
            data: data,
			fetching: false,
			fetched: true,
			failed: false,
		})
	})

    it('should handle GET_CONTACTS_REJECTED', () => {
        expect(
            getContactsReducer(initialState, {
                type: GET_CONTACTS_REJECTED,
            })
        ).toEqual({
            data: {},
			fetching: false,
			fetched: false,
			failed: true,
        })
    })
})
