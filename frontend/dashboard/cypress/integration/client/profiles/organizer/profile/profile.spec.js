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


function getOrganizer() {
  return cy.route({
    method: 'GET',
    url: '/api/v1/organizer/profile',
    response: {
      data: {},
      success: true,
      error: ''
    },
    delay: 500
  });
}

describe('client.profiles.organizer.profile', () => {
  beforeEach(() => {
    cy.server();

    cy.login();

    getUser().as('getUser');
    getOrganizer().as('getOrganizer');
  })

  it('should load organizer profile', () => {
    // Pass options to the visit
    cy.visit('/profiles/private/organizer');

    cy.wait('@getOrganizer')

    cy.wait(3000).url().should('eq', 'https://localhost:4200/profiles/private/organizer');
  })
});
