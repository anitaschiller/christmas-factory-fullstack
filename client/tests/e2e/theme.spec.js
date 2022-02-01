describe('theme switcher', () => {
  it('shows the initially selected theme in the dropdown', () => {
    cy.visit('/');
    cy.get('[data-testid=select-theme]')
      .find('option:selected')
      .should('contain', '🐣');
  });
  it('switches to the valentine theme when selected in the dropdown', () => {
    cy.visit('/');
    cy.get('[data-testid=select-theme').select('valentine');
    cy.get('aside span').should('contain', '♡');
    cy.get('h2').should('contain', '💝');
  });
});
