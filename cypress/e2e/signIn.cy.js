/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser');

describe('Sign in page', () => {
  beforeEach(() => {
    cy.visit('/user/login');
  });

  it('should login user', () => {
    const { email, password, username } = generateUser();

    cy.get('h1').should('contain.text', 'Sign in');

    cy.get('[placeholder=Email]').type(email);
    cy.get('[placeholder=Password]').type(password);

    cy.get('.btn').should('exist').click();

    cy.get('.nav-link').should('contain.text', `${username}`);
  });
});
