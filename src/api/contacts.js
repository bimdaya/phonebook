import axios from 'axios';
import { GET_CONTACTS_BASE_URL } from '../constants/api';

/**
 * Get contacts with details from API
 * @return {object} array of contact objects
 * @throw {Error}
 */
export const getAllContacts = () => axios.get(`${GET_CONTACTS_BASE_URL}/contacts`)
	.then(
		response => response.data,
	).catch((error) => {
		throw new Error(
			`An error occured while fetching
  			contacts from the server. ${error}`,
		);
	});
