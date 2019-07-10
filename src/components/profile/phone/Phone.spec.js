import React from 'react';
import {render} from '@testing-library/react';
import Phone from './Phone';

describe('Phone', () => {

	it('should render phone number list', () => {
    const phone = {
      "mobile": "123456789",
      "work": "123456789",
      "home": "123456789"
    };
    const props = {
      phone: phone
    };
		const {container} = render(<Phone {...props}/>);

		expect(container.querySelector('.list')).not.toBeNull();
	});

	it('should render phone number list items', () => {
    const phone = {
      "mobile": "123456789",
      "work": "123456789",
      "home": "123456789"
    };
    const props = {
      phone: phone
    };
		const {container} = render(<Phone {...props}/>);

		expect(container.querySelectorAll('.item').length).toBe(3);
	});

	it('should render phone number list items', () => {
    const phone = {
      "mobile": "123456789",
      "work": "123456789",
      "home": "123456789"
    };
    const props = {
      phone: phone
    };
		const {container} = render(<Phone {...props}/>);

		expect(container.querySelectorAll('.item').length).toBe(3);
	});

	it('should render phone number with icon', () => {
		const phone = {
					'': '123456789'
		};
    const props = {
      phone: phone
    };
		const {container} = render(<Phone {...props}/>);

		expect(container.querySelectorAll('.mobile')).not.toBeNull();
	});

	it('should render phone number with type', () => {
    const phone = {
					'mobile': '123456789'
		};
    const props = {
      phone: phone
    };
    const {container} = render(<Phone {...props}/>);

		expect(container.querySelector('span')).not.toBeNull();
	});

	it('should not render phone number list is empty', () => {
    const phone = {
					'mobile': ''
		};
    const props = {
      phone: phone
    };
    const {container} = render(<Phone {...props}/>);

		expect(container.querySelectorAll('.item').length).toBe(0);
	});

})
