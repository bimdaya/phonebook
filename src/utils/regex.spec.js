import { searchQuery, validateInputString } from './regex';

const query1 = 'bim';
const list = [
	{
		name: 'bim',
	}, {
		name: 'duli',
	}, {
		name: 'bimd',
	}, {
		name: 'mario',
	},
];
const filters = ['name'];
const result = JSON.stringify([
	{
		name: 'bim',
	}, {
		name: 'bimd',
	},
]);
test('return array of filtered objects', () => {
	expect(JSON.stringify(searchQuery(query1, list, filters))).toBe(result);
});

const query2 = 'soma';
test('return an empty array when search query is not found', () => {
	expect(JSON.stringify(searchQuery(query2, list, filters))).toBe(JSON.stringify([]));
});

const value1 = 'abcd';
test('return true', () => {
	expect(validateInputString(value1)).toBe(true);
});

const value2 = './abc';
test('return false for invalid input ./', () => {
	expect(validateInputString(value2)).toBe(false);
});

const value3 = '';
test('return array of filtered objects', () => {
	expect(validateInputString(value3)).toBe(true);
});

const value4 = '123';
test('return false for numbers', () => {
	expect(validateInputString(value4)).toBe(false);
});
