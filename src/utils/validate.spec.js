import { validateSearchInput, getDisplayName } from './validate';

const firstName = 'bim';
const lastName = 'daya';
test('return first and last names', () => {
	expect(getDisplayName(firstName, lastName)).toBe('bim daya');
});

test('return only first name', () => {
	expect(getDisplayName(firstName, '')).toBe('bim ');
});

test('return last name only', () => {
	expect(getDisplayName('', lastName)).toBe('daya');
});

test('return Anonymous when first and last names are empty', () => {
	expect(getDisplayName('', '')).toBe('Anonymous');
});

const keyCode1 = 80;
const keyCode2 = 44;
const value1 = 'abcd';
const value2 = './abc';
test('return true when input string is valid and keyCode is invalid', () => {
	expect(validateSearchInput(value1, keyCode1)).toBe(true);
});

test('return true when keyCode is valid and value is invalid', () => {
	expect(validateSearchInput(value2, keyCode2)).toBe(true);
});

test('return true when either keyCode or input is valid', () => {
	expect(validateSearchInput(value1, keyCode2)).toBe(true);
});

test('return false when neither keyCode nor input is valid', () => {
	expect(validateSearchInput(value2, keyCode1)).toBe(false);
});
