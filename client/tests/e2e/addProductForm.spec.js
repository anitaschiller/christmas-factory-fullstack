/// <reference types="Cypress"/>

const SERVER_URL = 'http://localhost:4000';

describe('product form', () => {
  beforeEach(() => {
    cy.request(SERVER_URL + '/api/prune-database');
    cy.fixture('categoryData').then((category) =>
      cy.request('POST', SERVER_URL + '/api/categories', category)
    );
    cy.visit('/');
    cy.viewport(1200, 800);
  });
  it('should render the headline', () => {
    cy.get('section h2').contains('🌷');
  });
  it('should show an error message if the form is invalid', () => {
    const product = { name: 'Vanillekipferl', price: '5', category: 'Kekse' };
    cy.get('[name="name"]').type(product.name);
    cy.get('[name="price"]').type(product.price);
    cy.get('[name="category"]').select(product.category);
    cy.get('[data-testid="add-product-btn"]').click();
    cy.get('[data-testid="error-message"]').should('be.visible').contains('🐰');
  });
});
