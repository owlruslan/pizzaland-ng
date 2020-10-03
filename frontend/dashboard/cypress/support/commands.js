// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
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
    url: '/api/v1/fan/artist-artist-profile-private-profiles',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });

  cy.route({
    method: 'GET',
    url: '/api/v1/artist/artist-artist-profile-private-profiles',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });

  cy.route({
    method: 'GET',
    url: '/api/v1/venue/artist-artist-profile-private-profiles',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });

  cy.route({
    method: 'GET',
    url: '/api/v1/organizer/artist-artist-profile-private-profiles',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });

  cy.visit('/sign-in');
  cy.get('[data-cy=email]').type('somemail@example.com');
  cy.get('[data-cy=password]').type('12345678');
  cy.get('[data-cy=submit]').click({force: true});
  cy.hash().should('eq', '');
});

Cypress.Commands.add("adminLogin", () => {
  cy.server();

  cy.route({
    method: 'POST',
    url: 'https://dev.admin.mouseapp.io/api/v1/admin/sessions',
    status: 200,
    response: {
      data: {
        attributes: {
          expires_at: 1587462300,
          refresh_token_value: "TOKEN",
          token_value: "TOKEN"
        }
      }
    }
  }).as('session');

  cy.visit('/admin/auth/sign-in');
  cy.get('[data-cy=email]').type('somemail@example.com');
  cy.get('[data-cy=password]').type('12345678');
  cy.get('[data-cy=submit]').click({force: true});

  cy.wait('@session').its('status').should('eq', 200);
})
;
