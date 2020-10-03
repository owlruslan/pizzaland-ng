/// <reference types="Cypress" />

describe('app.admin.auth', () => {
  beforeEach(() => {
    cy.adminLogin();
    cy.visit('/admin/auth/sign-in')
  });

  it('should load signIn page', () => {
    /*cy.server();

    cy.route({
      method: 'GET',
      url: '/api/v1/organizer/events?filter[date_from]=&filter[date_to]=',
      response: {
        data: {},
        success: true,
        error: ''
      }
    });

    cy.route({
      method: 'GET',
      url: '/api/v1/genres',
      response: {
        data: {},
        success: true,
        error: ''
      }
    });

    cy.visit('/events', {
      timeout: 50000, // increase total time for the visit to resolve
    });*/

    cy.get('[data-cy=login]').should('have.text', 'Log in');
  });
});
