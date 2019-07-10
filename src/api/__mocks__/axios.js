import data from '../contact.sample.json';

export default {
  get: jest.fn(() => Promise.resolve({ data })),
};
