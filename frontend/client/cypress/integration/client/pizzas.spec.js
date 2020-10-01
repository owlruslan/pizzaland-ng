/// <reference types="Cypress" />

describe('app.client.pizzas', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('shows pizzas list', () => {
    cy.url().should('eq', 'http://localhost:4200/pizzas')
  })
});
