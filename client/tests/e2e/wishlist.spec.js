describe('wishlist', () => {
  it('it should show a positive number if minimum one item has been added to the wishlist', () => {
    cy.visit('/');
    cy.get('[data-testid="card-tree"] article').first().find('span').click();
    cy.get('[data-testid="wishlist-items"]').should('be.visible');
    cy.get('[data-testid="wishlist-items"]').should('contain', 1);
  });
});
