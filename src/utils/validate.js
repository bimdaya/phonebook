import { validateInputString } from './regex';

/**
 * Validate input to accept letters or valid key codes
 * @param {string} value input value
 * @param {string} keyCode key code
 * @return {boolean} valid/invalid
 */
export const validateSearchInput = (value, keyCode) => {
	if (validateInputString(value) || !value) {
		return true;
	}

	// includes space, delete, arrow keys, shift, etc.
	if (keyCode >= 8 && keyCode <= 46) {
		return true;
	}

	return false;
};

/**
 * Return full name of a user
 * @param {string} firstName first name
 * @param {string} lastName last name
 * @return {string} fullname
 */
export const getDisplayName = (firstName, lastName) => {
	if (firstName) {
		return `${firstName} ${lastName}`;
	}

	if (lastName) {
		return lastName;
	}

	return 'Anonymous';
};
