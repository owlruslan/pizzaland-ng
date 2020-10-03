/// <reference types="Cypress" />

function createUser() {
  return cy.route({
    method: 'POST',
    url: 'https://dev.mouseapp.io/api/v1/user',
    response: {
      data: {
        "expire": "string",
        "token": "string"
      },
      success: true,
      error: ''
    }
  });
}

function loginUser() {
  return cy.route({
    method: 'POST',
    url: '/api/v1/user/login',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function createVenue() {
  return cy.route({
    method: 'POST',
    url: '/api/v1/venue',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function updateVenue() {
  return cy.route({
    method: 'PUT',
    url: '/api/v1/venue',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function getUser() {
  return cy.route({
    method: 'GET',
    url: '/api/v1/user/me',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function getVenue() {
  return cy.route({
    method: 'GET',
    url: '/api/v1/venue/profile',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

describe('client.auth.sign-up.venue', () => {
  before(() => {
    cy.visit('/auth/sign-up');
  });

  describe('creates user account', () => {
    beforeEach(() => {
      cy.server();
    });

    it('fills out create user form', () => {
      cy.get('[data-cy=email]').type('example@mail.com');
      cy.get('[data-cy=username]').type('username');
      cy.get('[data-cy=first-name]').type('Firstname');
      cy.get('[data-cy=last-name]').type('Lastname');
      cy.get('[data-cy=phone]').type('+79999999999');
      cy.get('[data-cy=password]').type('12345678');
      cy.get('[data-cy=verify-password]').type('12345678');

      cy.get('[data-cy=venue]').click({
        force: true
      });
    })

    it('creates user account', () => {
      createUser().as('createUser');

      cy.get('[data-cy=submit-button]').click({
        force: true
      });

      cy.wait('@createUser').its('status').should('eq', 200)
        .then(() => cy.url().should('eq', 'https://localhost:4200/auth/sign-up/info'))

      cy.get('[data-cy=title]').should('contain', 'Venue account info');
    })

    it('fills out create venue account form', () => {
      cy.get('[data-cy=country]').type('USA');
      cy.get('[data-cy=street]').type('15326 Cornet St');
      cy.get('[data-cy=city]').type('Santa Fe Springs');
      cy.get('[data-cy=state]').type('CA');
      cy.get('[data-cy=zipCode]').type('90670');
      cy.get('[data-cy=email]').type('livevenue@gmail.com');
      cy.get('[data-cy=website]').type('https//www.mouselabs.com');
    })

    it('creates venue account', () => {
      createVenue().as('createVenue');
      updateVenue().as('updateVenue');
      getVenue().as('getVenue');

      cy.get('[data-cy=submit-button]').click({
        force: true
      });

      cy.wait('@createVenue').its('status').should('eq', 200);
      cy.wait('@getVenue').url().should('eq', 'https://localhost:4200/profiles/private/venue');
    })
  });
});
