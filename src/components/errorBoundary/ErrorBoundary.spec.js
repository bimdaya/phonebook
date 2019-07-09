import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorBoundary from './ErrorBoundary';

Enzyme.configure({adapter: new Adapter()});

//use Enzyme since react-testing-library can not setState
describe('ErrorBoundary', () => {
	it('should render error message when an error occured', () => {
		const wrapper = shallow(<ErrorBoundary/>);
		wrapper.setState({hasError: true});

		expect(wrapper.find('h1').text()).toBe('Ooops...Something went wrong.');
	});

});
