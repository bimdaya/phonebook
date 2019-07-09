import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import ClearButton from './ClearButton';

describe('ClearButton', () => {
	it('should render clear button', () => {
		const props = {
			onClearAll: jest.fn(),
			disabled: false
		};

		const {container} = render(<ClearButton {...props}/>);

		expect(container.querySelector('button')).not.toBeNull();
	});

	it('should disable button if props disable is true', () => {
		const props = {
			onClearAll: jest.fn(),
			disabled: true
		};

		const {container} = render(<ClearButton {...props}/>);

		expect(container.querySelector('.disabled')).not.toBeNull();
	});

	it("calls the onClearAll function when the button is clicked", () => {
		const props = {
			onClearAll: jest.fn(),
			disabled: false
		};

		const {container} = render(<ClearButton {...props} />);
		fireEvent.click(container.querySelector('button'));
  		expect(props.onClearAll).toHaveBeenCalled();
	});
})
