/// <reference types="Cypress" />

describe('client.feed', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/feed');
  });

  it('should load feed page', () => {
    cy.get('[data-cy=title]').should('have.text', 'Feed');
  })
});
