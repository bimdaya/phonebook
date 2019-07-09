import React from 'react';
import {render} from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
	const props = {
		messageBody: 'test message',
		messageHeader: 'test header'
	};

	it('should render container with negative class', () => {
		const {container} = render(<ErrorMessage {...props}/>);

		expect(container.querySelector('.negative')).not.toBeNull();
	});
})
