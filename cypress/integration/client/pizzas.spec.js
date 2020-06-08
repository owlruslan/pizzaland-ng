/// <reference types="Cypress" />

describe('app.client.pizzas', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('shows pizzas list', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/v1/pizzas',
      response: {
        data: {},
        success: true,
        error: ''
      }
    }).as('getPizzas');

    cy.wait('@getPizzas', 3000).its('status').should('eq', 200);

    cy.url().should('eq', 'https://localhost:4200/')
  })
});
