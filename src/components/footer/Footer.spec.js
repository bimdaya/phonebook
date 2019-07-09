import React from 'react';
import {render} from '@testing-library/react';

import Footer from './Footer';

describe('footer', () => {

	it('should render self', () => {
		const {container} = render(<Footer/>);

		expect(container.querySelector('p')).not.toBeNull();
	});
})
