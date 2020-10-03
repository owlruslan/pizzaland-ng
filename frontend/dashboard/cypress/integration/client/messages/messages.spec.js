/// <reference types="Cypress" />

describe.skip('root.client.messages', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/messages', {
      timeout: 50000, // increase total time for the visit to resolve
    });
  });

  it('should load messages page', () => {
    cy.get('[data-cy=title]').should('have.text', 'Messages');
  });

  describe(`Messages of artist`, () => {
    it(`should open 'artist-message-account-approved'`, () => {
      cy.server();

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
        url: '/api/v1/artist/artist-artist-profile-private-profiles',
        response: {
          data: {},
          success: true,
          error: ''
        }
      });

      cy.route('GET', '/api/v1/artist/messages', 'fixture:messages-artist.json');

      cy.get('[data-cy=navbar__menu-item__profile]').click();
      cy.get('[data-cy=navbar__menu-item__profile__artist]').click({force: true});

      cy.get('[data-cy=message-card]').click();
    });
  });
});
