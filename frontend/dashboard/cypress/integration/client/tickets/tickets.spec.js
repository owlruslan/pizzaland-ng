/// <reference types="Cypress" />

describe('client.tickets', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/tickets');
  });

  it('should load tickets page', () => {
    cy.get('[data-cy=title]').should('have.text', 'Tickets');
  });
});
