/// <reference types="Cypress" />

describe('app.client.basket', () => {
  beforeEach(() => {
    cy.visit('/basket')
  });

  it('shows pizzas list', () => {
    cy.url().should('eq', 'http://localhost:4200/basket')
  })
});
