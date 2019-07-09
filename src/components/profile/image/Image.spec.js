import React from 'react';
import {render} from '@testing-library/react';

import Image from './Image';

describe('Image', () => {
	it('should render image tag', () => {
		const props = {
			imageSrc: 'https://react.semantic-ui.com/images/avatar/small/rachel.png'
		}
		const {container} = render(<Image {...props}/>);

		expect(container.querySelector('img')).not.toBeNull();
	});

	it('should render icon when imageSrc is null', () => {
		const props = {
			imageSrc: ''
		};

		const {container} = render(<Image {...props}/>);

		expect(container.querySelector('i')).not.toBeNull();
	});

})
