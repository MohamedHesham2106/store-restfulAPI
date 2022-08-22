# Storefront Backend Project

### Installing

Simply run command to install dependencies:

```bash
yarn
or
npm install
```

### Setup Environment

Create `.env` file with these variables:

```bash
PORT=3000
ENV = dev

DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=database_dev
DB_TEST_DATABASE=database_test
DB_USER=postgres
DB_PASSWORD=password

BCRYPT_PASSWORD=your-secret-password
SALT_ROUNDS = 10
TOKEN_SECRET =your-secret-token
```

### Steps to run Application

```bash
# start migration
db-migrate up
# start dev server
yarn start
# run prettier/lint
yarn prettier
yarn lint
# build app
yarn build
# start build server
node build/server.js
```

### Run Tests

```bash
yarn test
```

## Built using:

- Typescript
- NodeJs
- Express
- db-migrate
- Jasmine
- Yarn

### Endpoints

- Kindly Check [REQUIREMENT.md](./REQUIREMENT.md)

### Database Schema

- Kindly Check [REQUIREMENT.md](./REQUIREMENT.md)
