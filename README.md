# Phonebook

### Features

- Search contacts retrieved from json-server

### Prerequisites

#### Node.js
`$ node --version`
v10.15.3 or above

#### npm 
`$ npm --version`
6.4.1 or above

## Installing and running

- Clone phonebook app
`git clone https://github.com/bud93411/phonebook.git`
`cd phonebook`

- Install dependencies
`npm install`

- Run json-server
`json-server --watch ./public/db.json --port 4000`

##### Dev mode
- For initial build
`npm run build`

- Start the app in dev mode(Hot reloading is enabled)
`npm run dev`

##### Prod mode

- Build and run the app
`npm start`

#### To run test cases
`npm run test`

#### ESLint
`npm run lint`
