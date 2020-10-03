/// <reference types="Cypress" />
function getUser() {
  return cy.route({
    method: 'GET',
    url: '/api/v1/user/me',
    response: {
      data: {},
      success: true,
      error: ''
    },
    delay: 500
  });
}


function getArtist() {
  return cy.route({
    method: 'GET',
    url: '/api/v1/artist/profile',
    response: {
      data: {},
      success: true,
      error: ''
    },
    delay: 500
  });
}

describe('client.profiles.artist.profile', () => {
  beforeEach(() => {
    cy.server();

    cy.login();

    getUser().as('getUser');
    getArtist().as('getArtist');
  })

  it('should load artist profile', () => {
    // Pass options to the visit
    cy.visit('/profiles/private/artist');

    cy.wait('@getArtist')

    cy.wait(3000).url().should('eq', 'https://localhost:4200/profiles/private/artist');
  })
});
