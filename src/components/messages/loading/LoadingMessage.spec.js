import React from 'react';
import {render} from '@testing-library/react';

import LoadingMessage from './LoadingMessage';

describe('LoadingMessage', () => {
	const props = {
		messageBody: 'test message',
		messageHeader: 'test header'
	};

	it('should render container with negative class', () => {
		const {container} = render(<LoadingMessage {...props}/>);

		expect(container.querySelector('.icon')).not.toBeNull();
	});
})
