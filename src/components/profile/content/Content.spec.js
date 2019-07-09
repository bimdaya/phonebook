import React from 'react';
import {render} from '@testing-library/react';
import Content from './Content';

describe('Content', () => {
	it('should render content', () => {
		const props = {
			content: 'email@email.com',
			icon: 'home'
		}
		const {container} = render(<Content {...props}/>);

		expect(container.querySelector('span').innerHTML).toBe('email@email.com');
	});

	it('should render icon', () => {
		const props = {
			content: 'email@email.com',
			icon: 'home'
		}

		const {container} = render(<Content {...props}/>);

		expect(container.querySelector('.icon')).not.toBeNull();
	});

	it('should render content without icon', () => {
		const props = {
			content: 'email@email.com'
		}

		const {container} = render(<Content {...props}/>);

		expect(container.querySelector('span').innerHTML).toBe('email@email.com');
	});

})
