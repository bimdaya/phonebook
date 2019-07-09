import React from 'react';
import {render} from '@testing-library/react';

import InfoMessage from './InfoMessage';

describe('InfoMessage', () => {
	const props = {
		messageBody: 'test message',
		messageHeader: 'test header'
	};

	it('should render container with info class', () => {
		const {container} = render(<InfoMessage {...props}/>);

		expect(container.querySelector('.info')).not.toBeNull();
	});
})
