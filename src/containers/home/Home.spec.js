import React from 'react';
import {render as ren} from '@testing-library/react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';
import configureStore from '../../store/configureStore';
import {Provider} from 'react-redux';

Enzyme.configure({adapter: new Adapter()});

describe('Home', () => {
	it('should call componentDidMount', () => {
		const store = configureStore({
			contacts: {
				data: [],
				fetching: false,
				fetched: true,
				failed: false
			}
		});

		const wrapper = shallow(<Provider store={store}>
			<Home/>
		</Provider>);
		jest.spyOn(wrapper.instance(), 'componentDidMount');
		wrapper.instance().componentDidMount();
		expect(wrapper.instance().componentDidMount).toHaveBeenCalled();
	});

	it('should render Home', () => {
		const store = configureStore({
			contacts: {
				data: [],
				fetching: false,
				fetched: true,
				failed: false
			}
		});

		const wrapper = shallow(<Provider store={store}>
			<Home/>
		</Provider>);
		jest.spyOn(wrapper.instance(), 'componentDidMount');
		wrapper.instance().componentDidMount();
		expect(wrapper.find('.home')).not.toBeNull();
	});

	it('should render error message when fetching failed', () => {
		const store = configureStore({
			contacts: {
				data: null,
				fetching: false,
				fetched: false,
				failed: true
			}
		});

		const wrapper = shallow(<Provider store={store}>
			<Home/>
		</Provider>);
		jest.spyOn(wrapper.instance(), 'componentDidMount');
		wrapper.instance().componentDidMount();
		expect(wrapper.find('.error')).not.toBeNull();
	});

	it('should render info message when fetching data', () => {
		const store = configureStore({
			contacts: {
				data: null,
				fetching: true,
				fetched: false,
				failed: false
			}
		});

		const wrapper = shallow(<Provider store={store}>
			<Home/>
		</Provider>);
		expect(wrapper.find('.info')).not.toBeNull();
	});

})
