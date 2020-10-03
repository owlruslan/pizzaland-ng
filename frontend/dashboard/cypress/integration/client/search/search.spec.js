/// <reference types="Cypress" />

describe('client.search', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/search');
  });

  it('should load search page', () => {
    cy.get('[data-cy=title]').should('have.text', 'Search Results');
  })
});
