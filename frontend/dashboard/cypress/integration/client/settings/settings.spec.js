/// <reference types="Cypress" />

describe('client.settings', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/settings');
  });

  it('should load settings page', () => {
    cy.get('[data-cy=title]').should('have.text', 'Settings');

  });
});
