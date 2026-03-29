function generateUser() {
  const name = 'test_user';
  const email = `test_user_new@gmail.com`;
  const password = `Password1234`;

  return { email, password, name };
}

module.exports = { generateUser };
