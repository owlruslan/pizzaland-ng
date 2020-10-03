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


function getVenue() {
  return cy.route({
    method: 'GET',
    url: '/api/v1/venue/profile',
    response: {
      data: {},
      success: true,
      error: ''
    },
    delay: 500
  });
}

describe('client.profiles.venue.profile', () => {
  beforeEach(() => {
    cy.server();

    cy.login();

    getUser().as('getUser');
    getVenue().as('getVenue');
  })

  it('should load venue profile', () => {
    // Pass options to the visit
    cy.visit('/profiles/private/venue');

    cy.wait('@getVenue')

    cy.wait(3000).url().should('eq', 'https://localhost:4200/profiles/private/venue');
  })
});
