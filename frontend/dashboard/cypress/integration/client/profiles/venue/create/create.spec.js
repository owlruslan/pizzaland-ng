/// <reference types="Cypress" />

function createVenue() {
  return cy.route({
    method: 'POST',
    url: 'https://dev.mouseapp.io/api/v1/venue',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function updateVenueHours() {
  return cy.route({
    method: 'PUT',
    url: 'https://dev.mouseapp.io/api/v1/venue/hours',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function updateVenueListingDetails() {
  return cy.route({
    method: 'PUT',
    url: 'https://dev.mouseapp.io/api/v1/venue/listing_details',
    response: {
      data: {},
      success: true,
      error: ''
    }
  });
}

function updateVenueMedia() {
  return cy.route({
    method: 'PUT',
    url: 'https://dev.mouseapp.io/api/v1/venue/media',
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

describe('app.client.profiles.venue.Create', () => {
  beforeEach(() => {
    cy.login();

    cy.server();
    createVenue().as('createVenue');
    updateVenueHours().as('updateVenueHours');
    updateVenueListingDetails().as('updateVenueListingDetails');
    updateVenueMedia().as('updateVenueMedia');
    getVenue().as('getVenue');
  });

  it('should load `Venue` create page', () => {
    cy.visit('/profiles/private/venue/add');

    // Check navbar title
    cy.get('[data-cy=title]').should('contain', 'Edit Venue');
  });

  it('should pass About page and go to Hours page', () => {
    cy.visit('/profiles/private/venue/add');

    // Check navbar title
    cy.get('[data-cy=input-venueName]').type('Venue name');
    cy.get('[data-cy=input-username]').type('Username');
    cy.get('[data-cy=input-contact-first-name]').type('Contact first name');
    cy.get('[data-cy=input-contact-last-name]').type('Contact last name');
    cy.get('[data-cy=input-description]').type('Short description');
    cy.get('[data-cy=input-phone]').type('+79999999999');
    cy.get('[data-cy=input-fax]').type('+79999999999');
    cy.get('[data-cy=input-emails]').find('.add-button').click();
    cy.get('[data-cy=email-input-title]').find('input').type('Email Title', {force: true});
    cy.get('[data-cy=email-input-email]').find('input').type('example@mail.com', {force: true});
    cy.get('[data-cy=input-country]').type('Country');
    cy.get('[data-cy=input-address]').type('Address');
    cy.get('[data-cy=input-city]').type('City');
    cy.get('[data-cy=input-state]').type('State');
    cy.get('[data-cy=input-zipcode]').type('123456');

    // Click Next Step Button.
    cy.get('[data-cy=button-submit]').click({force: true});
    cy.wait('@createVenue').its('status').should('eq', 200);
    cy.url().should('eq', 'https://localhost:4200/profiles/private/venue/add/hours');
  });

  it('should pass Hours page and go to Listing page', () => {
    cy.visit('/profiles/private/venue/add/hours');

    // Click Next Step Button.
    cy.get('[data-cy=button-submit]').click({force: true});
    cy.wait('@updateVenueHours').its('status').should('eq', 200);
    cy.url().should('eq', 'https://localhost:4200/profiles/private/venue/add/listing');
  });

  it('should pass Listing page and go to Media page', () => {
    cy.visit('/profiles/private/venue/add/listing');

    // Click Next Step Button.
    cy.get('[data-cy=button-submit]').click({force: true});
    cy.wait('@updateVenueListingDetails').its('status').should('eq', 200);
    cy.url().should('eq', 'https://localhost:4200/profiles/private/venue/add/media');
  });


  it('should pass Media page and go to Dates page', () => {
    cy.visit('/profiles/private/venue/add/media');

    // Click Next Step Button.
    cy.get('[data-cy=button-submit]').click({force: true});
    cy.wait('@updateVenueMedia').its('status').should('eq', 200);
    cy.url().should('eq', 'https://localhost:4200/profiles/private/venue/add/dates');
  });

  it('should pass Dates page and go to Preview page', () => {
    cy.visit('/profiles/private/venue/add/dates');

    // Click Next Step Button.
    cy.get('[data-cy=button-submit]').click({force: true});
    cy.url().should('eq', 'https://localhost:4200/profiles/private/venue');
  });
});
