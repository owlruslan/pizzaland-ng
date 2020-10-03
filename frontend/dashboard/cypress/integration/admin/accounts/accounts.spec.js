/// <reference types="Cypress" />

const ACCOUNT_ID = 'ID';

function getAccountsSummary() {
  return cy.route({
    method: 'GET',
    url: 'https://dev.admin.mouseapp.io/api/v1/accounts/summary',
    status: 200,
    delay: 500,
    response: {
      data: {
        attributes: {
          all: 173,
          approved: 1,
          new: 14,
          pending: 0
        }
      },
    }
  })
}

function getAccounts() {
  return cy.route({
    method: 'GET',
    url: 'https://dev.admin.mouseapp.io/api/v1/accounts?page[size]=10&page[number]=0&type=all',
    status: 200,
    delay: 500,
    response: {
      data: [
        {
          attributes: {
            account_type: "fan",
            address: "",
            created_at: 1587578076,
            image: "",
            mouselive_id: "ID",
            name: "User",
            status: "",
          },
          id: ACCOUNT_ID
        },
        {
          attributes: {
            account_type: "artist",
            address: "",
            created_at: 1587578076,
            image: "",
            mouselive_id: ACCOUNT_ID,
            name: "User",
            status: "",
          },
          id: ACCOUNT_ID
        },
        {
          attributes: {
            account_type: "venue",
            address: "",
            created_at: 1587578076,
            image: "",
            mouselive_id: ACCOUNT_ID,
            name: "User",
            status: "",
          },
          id: ACCOUNT_ID
        },
        {
          attributes: {
            account_type: "organizer",
            address: "",
            created_at: 1587578076,
            image: "",
            mouselive_id: ACCOUNT_ID,
            name: "User",
            status: "",
          },
          id: ACCOUNT_ID
        }
      ],
    }
  })
}

function getFanAccount() {
  return cy.route({
    method: 'GET',
    url: `https://dev.admin.mouseapp.io/api/v1/accounts/fan/${ACCOUNT_ID}`,
    status: 200,
    delay: 500,
    response: {
      data: [{
        attributes: {
          bio: "SOME BIO",
          mouselive_id: "3a31b804-a9f6-4254-8fde-945d0a392196",
          mouselive_name: "MOUSELIVE_NAME",
          name: "FAN_NAME",
          photo: "",
        }
      }],
    }
  })
}

function getArtistAccount() {
  return cy.route({
    method: 'GET',
    url: `https://dev.admin.mouseapp.io/api/v1/accounts/artist/${ACCOUNT_ID}`,
    status: 200,
    delay: 500,
    response: {
      data: [{
        attributes: {
          bio: "SOME BIO",
          mouselive_id: "3a31b804-a9f6-4254-8fde-945d0a392196",
          mouselive_name: "MOUSELIVE_NAME",
          name: "ARTIST_NAME",
          photo: "",
        }
      }],
    }
  })
}

function getVenueAccount() {
  return cy.route({
    method: 'GET',
    url: `https://dev.admin.mouseapp.io/api/v1/accounts/venue/${ACCOUNT_ID}`,
    status: 200,
    delay: 500,
    response: {
      data: [{
        attributes: {
          bio: "SOME BIO",
          mouselive_id: "3a31b804-a9f6-4254-8fde-945d0a392196",
          mouselive_name: "MOUSELIVE_NAME",
          name: "VENUE_NAME",
          photo: "",
        }
      }],
    }
  })
}

function getOrganizerAccount() {
  return cy.route({
    method: 'GET',
    url: `https://dev.admin.mouseapp.io/api/v1/accounts/organizer/${ACCOUNT_ID}`,
    status: 200,
    delay: 500,
    response: {
      data: [{
        attributes: {
          bio: "SOME BIO",
          mouselive_id: "3a31b804-a9f6-4254-8fde-945d0a392196",
          mouselive_name: "MOUSELIVE_NAME",
          name: "ORGANIZER_NAME",
          photo: "",
        }
      }],
    }
  })
}

describe('app.admin.accounts', () => {
  beforeEach(() => {
    cy.adminLogin();
  });

  it('should load Accounts list', () => {
    cy.server();

    // Load data
    getAccountsSummary().as('getAccountsSummary');
    getAccounts().as('getAccounts');

    // Visit account page.
    cy.visit('/admin/accounts');

    // Load cards
    cy.get('[data-cy=card-all-accounts]').should('have.attr', 'title');

    // Wait for accounts summary data.
    cy.wait('@getAccountsSummary').its('status').should('eq', 200);
    cy.wait('@getAccounts').its('status').should('eq', 200);
  });

  it('should load Fan account', () => {
    cy.server();

    // Load data
    getAccountsSummary().as('getAccountsSummary');
    getAccounts().as('getAccounts');
    getFanAccount().as('getFanAccount');

    // Visit account page.
    cy.visit('/admin/accounts');

    // Load cards
    cy.get('[data-cy=card-all-accounts]').should('have.attr', 'title');

    // Wait for accounts summary data.
    cy.wait('@getAccountsSummary').its('status').should('eq', 200);
    cy.wait('@getAccounts').its('status').should('eq', 200);

    // Click on fan.
    cy.get('.mat-row').eq(0).click();

    cy.wait('@getFanAccount').its('status').should('eq', 200);
  });

  it('should load Artist account', () => {
    cy.server();

    // Load data
    getAccountsSummary().as('getAccountsSummary');
    getAccounts().as('getAccounts');
    getArtistAccount().as('getArtistAccount');

    // Visit account page.
    cy.visit('/admin/accounts');

    // Load cards
    cy.get('[data-cy=card-all-accounts]').should('have.attr', 'title');

    // Wait for accounts summary data.
    cy.wait('@getAccountsSummary').its('status').should('eq', 200);
    cy.wait('@getAccounts').its('status').should('eq', 200);

    // Click on fan.
    cy.get('.mat-row').eq(1).click();

    cy.wait('@getArtistAccount').its('status').should('eq', 200);
  });

  it('should load Venue account', () => {
    cy.server();

    // Load data
    getAccountsSummary().as('getAccountsSummary');
    getAccounts().as('getAccounts');
    getVenueAccount().as('getVenueAccount');

    // Visit account page.
    cy.visit('/admin/accounts');

    // Load cards
    cy.get('[data-cy=card-all-accounts]').should('have.attr', 'title');

    // Wait for accounts summary data.
    cy.wait('@getAccountsSummary').its('status').should('eq', 200);
    cy.wait('@getAccounts').its('status').should('eq', 200);

    // Click on fan.
    cy.get('.mat-row').eq(2).click();

    cy.wait('@getVenueAccount').its('status').should('eq', 200);
  });

  it('should load Venue account', () => {
    cy.server();

    // Load data
    getAccountsSummary().as('getAccountsSummary');
    getAccounts().as('getAccounts');
    getOrganizerAccount().as('getOrganizerAccount');

    // Visit account page.
    cy.visit('/admin/accounts');

    // Load cards
    cy.get('[data-cy=card-all-accounts]').should('have.attr', 'title');

    // Wait for accounts summary data.
    cy.wait('@getAccountsSummary').its('status').should('eq', 200);
    cy.wait('@getAccounts').its('status').should('eq', 200);

    // Click on fan.
    cy.get('.mat-row').eq(3).click();

    cy.wait('@getOrganizerAccount').its('status').should('eq', 200);
  });
});
