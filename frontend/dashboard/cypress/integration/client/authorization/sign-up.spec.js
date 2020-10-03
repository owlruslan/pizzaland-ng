/// <reference types="Cypress" />

function createUser() {
  return cy.route({
    method: 'POST',
    url: 'https://dev.mouseapp.io/api/v1/user',
    response: {
      data: {
        "expire": "string",
        "token": "string"
      },
      success: true,
      error: ''
    }
  });
}

function loginUser() {
  return cy.route({
    method: 'POST',
    url: '/api/v1/user/login',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function createFan() {
  return cy.route({
    method: 'POST',
    url: '/api/v1/fan',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function createArtist() {
  return cy.route({
    method: 'POST',
    url: '/api/v1/artist',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function createVenue() {
  return cy.route({
    method: 'POST',
    url: '/api/v1/venue',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function createOrganizer() {
  return cy.route({
    method: 'POST',
    url: '/api/v1/organizer',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function updateFan() {
  return cy.route({
    method: 'PUT',
    url: '/api/v1/fan',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function updateArtist() {
  return cy.route({
    method: 'PUT',
    url: '/api/v1/artist',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function updateVenue() {
  return cy.route({
    method: 'PUT',
    url: '/api/v1/venue',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function updateOrganizer() {
  return cy.route({
    method: 'PUT',
    url: '/api/v1/organizer',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function getUser() {
  return cy.route({
    method: 'GET',
    url: '/api/v1/user/me',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function getFan() {
  return cy.route({
    method: 'GET',
    url: '/api/v1/fan/profile',
    response: {
      data: {},
      success: true,
      error: ''
    }
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
    }
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
    }
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
    }
  });
}

describe('client.auth.sign-up', () => {
  beforeEach(() => {
    cy.server();
    createUser().as('createUser');

    createFan().as('createFan');
    updateFan().as('updateFan');
    getFan().as('getFan');

    createArtist().as('createArtist');
    updateArtist().as('updateArtist');
    getArtist().as('getArtist');

    createVenue().as('createVenue');
    updateVenue().as('updateVenue');
    getVenue().as('getVenue');

    createOrganizer().as('createOrganizer');
    updateOrganizer().as('updateOrganizer');
    getOrganizer().as('getOrganizer');
  });

  it('registers fan', () => {
    cy.visit('/auth/sign-up');

    cy.get('[data-cy=email]').type('example@mail.com');
    cy.get('[data-cy=username]').type('username');
    cy.get('[data-cy=first-name]').type('Firstname');
    cy.get('[data-cy=last-name]').type('Lastname');
    cy.get('[data-cy=phone]').type('+79999999999');
    cy.get('[data-cy=password]').type('12345678');
    cy.get('[data-cy=verify-password]').type('12345678');

    cy.get('[data-cy=fan]').click({
      force: true
    });

    cy.get('[data-cy=submit-button]').click({
      force: true
    });

    cy.wait('@createUser').its('status').should('eq', 200)
      .then(() => cy.url().should('eq', 'https://localhost:4200/auth/sign-up/info'))

    cy.get('[data-cy=title]').should('contain', 'Fan account info');

    cy.get('[data-cy=submit-button]').click({
      force: true
    });

    cy.wait('@createFan').its('status').should('eq', 200);
    cy.wait('@updateFan').its('status').should('eq', 200);
    cy.wait('@getFan').its('status').should('eq', 200);

    cy.wait(3001).url().should('eq', 'https://localhost:4200/profiles/private/fan');
  });

  it('registers artist', () => {
    cy.visit('/auth/sign-up');

    cy.get('[data-cy=email]').type('example@mail.com');
    cy.get('[data-cy=username]').type('username');
    cy.get('[data-cy=first-name]').type('Firstname');
    cy.get('[data-cy=last-name]').type('Lastname');
    cy.get('[data-cy=phone]').type('+79999999999');
    cy.get('[data-cy=password]').type('12345678');
    cy.get('[data-cy=verify-password]').type('12345678');

    cy.get('[data-cy=artist]').click({
      force: true
    });

    cy.get('[data-cy=submit-button]').click({
      force: true
    });

    cy.wait('@createUser').its('status').should('eq', 200)
      .then(() => cy.url().should('eq', 'https://localhost:4200/auth/sign-up/info'))

    cy.get('[data-cy=title]').should('contain', 'Artist account info');

    cy.get('[data-cy=submit-button]').click({
      force: true
    })

    cy.wait('@createArtist').its('status').should('eq', 200);
    cy.wait('@updateArtist').its('status').should('eq', 200);
    cy.wait('@getArtist').url().should('eq', 'https://localhost:4200/profiles/private/artist');
  });

  it.only('registers venue', () => {
    cy.visit('/auth/sign-up');

    cy.get('[data-cy=email]').type('example@mail.com');
    cy.get('[data-cy=username]').type('username');
    cy.get('[data-cy=first-name]').type('Firstname');
    cy.get('[data-cy=last-name]').type('Lastname');
    cy.get('[data-cy=phone]').type('+79999999999');
    cy.get('[data-cy=password]').type('12345678');
    cy.get('[data-cy=verify-password]').type('12345678');

    cy.get('[data-cy=venue]').click({
      force: true
    });

    cy.get('[data-cy=submit-button]').click({
      force: true
    });

    cy.wait('@createUser').its('status').should('eq', 200)
      .then(() => cy.url().should('eq', 'https://localhost:4200/auth/sign-up/info'))

    cy.get('[data-cy=title]').should('contain', 'Venue account info');

    cy.get('[data-cy=submit-button]').click({
      force: true
    });

    cy.wait('@createVenue').its('status').should('eq', 200);
    cy.wait('@getVenue').url().should('eq', 'https://localhost:4200/profiles/private/venue');
  });

  it('registers organizer', () => {
    cy.visit('/auth/sign-up');

    cy.get('[data-cy=email]').type('example@mail.com');
    cy.get('[data-cy=username]').type('username');
    cy.get('[data-cy=first-name]').type('Firstname');
    cy.get('[data-cy=last-name]').type('Lastname');
    cy.get('[data-cy=phone]').type('+79999999999');
    cy.get('[data-cy=password]').type('12345678');
    cy.get('[data-cy=verify-password]').type('12345678');

    cy.get('[data-cy=organizer]').click({
      force: true
    });

    cy.get('[data-cy=submit-button]').click({
      force: true
    });

    cy.wait('@createUser').its('status').should('eq', 200)
      .then(() => cy.url().should('eq', 'https://localhost:4200/auth/sign-up/info'))

    cy.get('[data-cy=title]').should('contain', 'Organizer account info');

    cy.get('[data-cy=submit-button]').click({
      force: true
    });

    cy.wait('@createOrganizer').its('status').should('eq', 200);
    cy.wait('@getOrganizer').url().should('eq', 'https://localhost:4200/profiles/private/organizer');
  });
});
