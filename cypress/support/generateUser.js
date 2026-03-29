import { faker } from '@faker-js/faker';

function generateUser() {
  const username = faker.internet.userName();
  const email = `${username}@gmail.com`;
  const password = `Password1234`;

  return { email, password, username };
}

module.exports = { generateUser };
