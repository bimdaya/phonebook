import mockAxios from 'axios';
import { getAllContacts } from './contacts';
import data from './contact.sample.json';

it('should call a getAllContacts function', () => {
	getAllContacts('/contacts', {}).then((response) => {
		expect({ data: response }).toEqual({ data });
	});
	expect(mockAxios.get).toHaveBeenCalledTimes(1);
});
