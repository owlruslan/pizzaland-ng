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


function getFan() {
  return cy.route({
    method: 'GET',
    url: '/api/v1/fan/profile',
    response: {
      data: {
        "accountState": "Accountstate",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae blanditiis eius esse ipsum nesciunt nisi non officia perspiciatis praesentium quasi qui quod repudiandae unde, veritatis. Maiores rem repellat veritatis.",
        "city": "City",
        "country": "Country",
        "fanPhotos": [
          {
            "description": "description",
            "id": "string",
            "url": "url"
          }
        ],
        "firstName": "Firstname",
        "followersCount": 13,
        "followingCount": 25,
        "genres": [
          "Genre1",
          "Genre2",
          "Genre3",
          "Genre4",
          "Genre5",
        ],
        "id": "ID",
        "lastName": "Lastname",
        "latitude": 43,
        "longitude": 43,
        "mouseliveId": "mouseliveid",
        "profilePhotoUrl": "string",
        "state": "State",
        "videoLinks": [
          {
            "album": "string",
            "caption": "string",
            "link": "string",
            "linkType": "string"
          }
        ],
        "zipCode": "123456"
      },
      success: true,
      error: ''
    },
    delay: 500
  });
}

describe('client.profiles.fan.profile', () => {
  beforeEach(() => {
    cy.server();

    cy.login();

    getUser().as('getUser');
    getFan().as('getFan');
  })

  it('should load fan profile', () => {
    // Pass options to the visit
    cy.visit('/profiles/private/fan');

    cy.wait('@getFan')

    cy.wait(3000).url().should('eq', 'https://localhost:4200/profiles/private/fan');
  })
});
