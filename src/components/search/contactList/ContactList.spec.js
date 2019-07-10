import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ContactList from './ContactList';

describe('ContactList', () => {
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

	it('should render contact list', () => {
		const props = {
			onContactSelect: jest.fn(),
			contacts: contactList
		};

		const {container} = render(<ContactList {...props}/>);

		expect(container.querySelector('.list-contact')).not.toBeNull();
	});

	it('should render contact list items', () => {
		const props = {
			onContactSelect: jest.fn(),
			contacts: contactList
		};

		const {container} = render(<ContactList {...props}/>);

		expect(container.querySelectorAll('.list-item-contact').length).toBe(2);
	});

	it('should render contact list item content', () => {
		const props = {
			onContactSelect: jest.fn(),
			contacts: contactList
		};

		const {container} = render(<ContactList {...props}/>);

		expect(container.querySelector('.list-header-contact').innerHTML).toBe('Bim Dayananda');
	});

	it("calls the onContactSelect function when the contact item is clicked", () => {
		const props = {
			onContactSelect: jest.fn(),
			contacts: contactList
		};

		const {container} = render(<ContactList {...props}/>);
		fireEvent.click(container.querySelector('.list-item-contact'));
		expect(props.onContactSelect).toHaveBeenCalled();
	});

  it('should render contact list item with last name when first name is empty', () => {
    const contact = [
  		{
  			"contact_id": 1,
  			"first_name": "",
  			"last_name": "Dayananda",
  			"email": "bim@gmail.com",
  			"phone": {
  				"mobile": "123456789",
  				"work": "123456789",
  				"home": "123456789"
  			},
  			"address": "TLL",
  			"avatar": "https://react.semantic-ui.com/images/avatar/small/rachel.png"
  		}
  	];
    const props = {
      onContactSelect: jest.fn(),
      contacts: contact
    };

    const {container} = render(<ContactList {...props}/>);

    expect(container.querySelector('.list-header-contact').innerHTML).toBe('Dayananda');
  });
})
