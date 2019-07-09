import React from 'react';
import {render} from '@testing-library/react';
import Header from './Header';

describe('header', () => {
	const props = {
		user: 'Bim'
	};

	it('should render self', () => {
		const {container} = render(<Header {...props}/>);

		expect(container.querySelector('h1')).not.toBeNull();
	});

	it('should render header title with the props', () => {
		const {container} = render(<Header {...props}/>);

		expect(container.querySelector('.content').innerHTML).toBe(`${props.user}'s Phone Book`);
	});

	it('should render icon', () => {
		const {container} = render(<Header {...props}/>);

		expect(container.querySelector('i').hasAttribute('class')).toBe(true);
	});

	it('should render call icon', () => {
		const {container} = render(<Header {...props}/>);

		expect(container.querySelector('i[class="call circular icon"]')).not.toBeNull();
	});
})
