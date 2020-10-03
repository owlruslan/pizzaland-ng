/// <reference types="Cypress" />

describe('client.auth.sign-in', () => {
  beforeEach(() => {
    cy.visit('/auth/sign-in')
  });

  it('login user and go to fan profile', () => {
    cy.server();
    cy.route({
      method: 'POST',
      url: '/api/v1/user/login',
      response: {
        data: {},
        success: true,
        error: ''
      }
    });

    cy.route({
      method: 'GET',
      url: '/api/v1/user/me',
      response: {
        data: {},
        success: true,
        error: ''
      }
    });

    cy.route({
      method: 'GET',
      url: '/api/v1/fan/profile',
      response: {
        data: {},
        success: true,
        error: ''
      }
    }).as('getFanProfile');

    cy.route({
      method: 'GET',
      url: '/api/v1/artist/profile',
      response: {
        data: {},
        success: true,
        error: ''
      }
    });

    cy.route({
      method: 'GET',
      url: '/api/v1/venue/profile',
      response: {
        data: {},
        success: true,
        error: ''
      }
    });

    cy.route({
      method: 'GET',
      url: '/api/v1/organizer/profile',
      response: {
        data: {},
        success: true,
        error: ''
      }
    });

    cy.visit('/auth/sign-in');

    cy.get('[data-cy=email]').type('some@mail.com');
    cy.get('[data-cy=password]').type('some@mail.com');

    cy.get('[data-cy=submit]').click({
      force: true
    });

    cy.wait('@getFanProfile', 3000).its('status').should('eq', 200);

    cy.url().should('eq', 'https://localhost:4200/profiles/private/fan')
  })
});
