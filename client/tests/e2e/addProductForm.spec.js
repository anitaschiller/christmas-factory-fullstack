/// <reference types="Cypress"/>

describe('product form', () => {
  it('should render the headline', () => {
    cy.visit('/');
    cy.get('section h2').contains('🎄');
  });
  it('should show an error message if one if the form is invalid', () => {
    cy.visit('/');
    const product = { name: 'Vanillekipferl', price: '5', category: 'Kekse' };
    cy.get('[name="name"]').type(product.name);
    cy.get('[name="price"]').type(product.price);
    cy.get('[name="category"]').select(product.category);
    cy.get('[data-testid="add-product-btn"]').click();
    cy.get('[data-testid="error-message"]').should('be.visible').contains('🎅🏽');
  });
});
