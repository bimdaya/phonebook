import axios from '../config/axios';

/**
 * Get contacts with details from API
 * @return {object} array of contact objects
 * @throw {Error}
 */
export const getAllContacts = () => axios.get('/contacts')
	.then(
		response => response.data,
	).catch((error) => {
		throw new Error(`An error occured while fetching
  			contacts from the server. ${error}`);
	});
