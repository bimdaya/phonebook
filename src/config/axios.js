import axios from 'axios';

import { GET_CONTACTS_BASE_URL } from '../constants/api';

const instance = axios.create({
	baseURL: GET_CONTACTS_BASE_URL,
});

export default instance;
