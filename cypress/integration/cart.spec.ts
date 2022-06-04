describe('Restaurants', () => {
  it('Shows list of restaurants as a home screen of app', () => {
    cy.visit('/')
    cy.get("[data-cy='cart-button']").click()
    cy.contains('Cart')
  })
})
