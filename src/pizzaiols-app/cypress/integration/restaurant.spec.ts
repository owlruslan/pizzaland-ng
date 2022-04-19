describe('Restaurants', () => {
  it('Shows list of restaurants as a home screen of app', () => {
    cy.visit('/restaurants/0')
    cy.contains('Pizzas')
  })
})
