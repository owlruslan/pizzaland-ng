/// <reference types="Cypress" />

describe('app.client.events', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/events')
  });

  it('should load events list', () => {
    cy.server();

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
    });

    cy.get('[data-cy=title]').should('have.text', 'Events');
  });

  describe(`Create`, () => {
    it('should load add page', () => {
      // https://on.cypress.io/visit

      // Visit any sub-domain of your current domain

      // Pass options to the visit
      cy.visit('/events/add', {
        timeout: 50000, // increase total time for the visit to resolve
        onBeforeLoad(contentWindow) {
          // contentWindow is the remote page's window object
          expect(typeof contentWindow === 'object').to.be.true
        },
        onLoad(contentWindow) {
          // contentWindow is the remote page's window object
          expect(typeof contentWindow === 'object').to.be.true
        },
      })

      cy.get('[data-cy=title-about]').should('have.text', 'About');

      cy.get('[data-cy=next-button]').click();
    });
  });

  describe(`Edit`, () => {
    it('should load edit page', () => {
      // https://on.cypress.io/visit

      // Visit any sub-domain of your current domain

      // Pass options to the visit
      cy.visit('/events/edit', {
        timeout: 50000, // increase total time for the visit to resolve
        onBeforeLoad(contentWindow) {
          // contentWindow is the remote page's window object
          expect(typeof contentWindow === 'object').to.be.true
        },
        onLoad(contentWindow) {
          // contentWindow is the remote page's window object
          expect(typeof contentWindow === 'object').to.be.true
        },
      })
    });
  });
});
