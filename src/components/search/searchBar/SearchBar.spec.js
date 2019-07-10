import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
	const props = {
		onQueryChange: jest.fn(),
		searchValue: ''
	}

	it('should render search bar', () => {
		const {container} = render(<SearchBar {...props}/>);

		expect(container.querySelector('input')).not.toBeNull();
	});

	it('should have icon', () => {
		const {container} = render(<SearchBar {...props}/>);

		expect(container.querySelectorAll('.icon').length).not.toBeNull();
	});

	it('should have placeholder', () => {
		const {container} = render(<SearchBar {...props}/>);

		expect(container.querySelector('input').hasAttribute('placeholder')).toBe(true);
	});

	it("calls the onQueryChange function when input type changes", () => {
		const {container} = render(<SearchBar {...props}/>);

		fireEvent.change(container.querySelector('input'), {
			target: {
				value: 'y'
			}
		});
		expect(props.onQueryChange).toHaveBeenCalled();
	});

	it("calls the onKeyDown function when input type changes", () => {
		const validateInput = jest.fn();
		const {container} = render(<SearchBar {...props}/>);

		container.validateInput = validateInput;
		container.validateInput();
		fireEvent.keyDown(container.querySelector('input'), {
			key: 'a',
			code: '65',
			keyCode: '65'
		});
		expect(validateInput).toHaveBeenCalled();
	});

	it("displaay error for invalid input", () => {
		const validateInput = jest.fn();
		const {container} = render(<SearchBar {...props}/>);

		container.validateInput = validateInput;
		container.validateInput();
		fireEvent.keyDown(container.querySelector('input'), {
			key: '/',
			code: '191',
			keyCode: '191'
		});
		expect(container.querySelector('.error')).not.toBeNull();
	});
})
