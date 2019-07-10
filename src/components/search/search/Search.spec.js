import React from 'react';
import {render} from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
	const contactList = [
		{
			"contact_id": 1,
			"first_name": "Bim",
			"last_name": "Dayananda",
			"email": "bim@gmail.com",
			"phone": {
				"mobile": "123456789",
				"work": "123456789",
				"home": "123456789"
			},
			"address": "TLL",
			"avatar": "https://react.semantic-ui.com/images/avatar/small/rachel.png"
		}, {
			"contact_id": 2,
			"first_name": "Roshane",
			"last_name": "Fernando",
			"email": "mario@gmail.com",
			"phone": {
				"mobile": "123456789",
				"work": "123456789",
				"home": "123456789"
			},
			"address": "TLL",
			"avatar": "https://react.semantic-ui.com/images/avatar/small/matthew.png"
		}
	];
  const viewSelectedContact = jest.fn();
  let props = {
		contacts: contactList,
		viewSelectedContact
  }

  it('should render the search component with search bar', () => {
    const {container} = render(<Search {...props}/>);

    expect(container.querySelector('.search-bar-contacts')).not.toBeNull();
		expect(container.querySelector('button').innerHTML).toBe('Clear');
  });

  it('should render the info message when contacts are empty', () => {
		props.contacts = [];
    const {container} = render(<Search {...props}/>);

    expect(container.querySelector('.info')).not.toBeNull();
		expect(container.querySelector('.header').innerHTML).toBe('No contacts found!');
		expect(container.querySelector('p').innerHTML).toBe('You can add contacts later.');
  });

})
