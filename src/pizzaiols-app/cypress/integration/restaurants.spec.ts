describe('Restaurants', () => {
  it('Shows list of restaurants as a home screen of app', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.contains('sandbox app is running!')
  })
})
