/// <reference types="Cypress"/>

const SERVER_URL = 'http://localhost:4000';

describe('wishlist', () => {
  before(() => {
    cy.request(SERVER_URL + '/api/prune-database');
    cy.fixture('productData').then((product) =>
      cy.request('POST', SERVER_URL + '/api/products', product)
    );
    cy.visit('/');
  });
  it('it should show a positive number if minimum one item has been added to the wishlist', () => {
    cy.get('[data-testid="card-tree"] article').first().find('span').click();
    cy.get('[data-testid="wishlist-items"]').should('be.visible');
    cy.get('[data-testid="wishlist-items"]').should('contain', 1);
  });
});
