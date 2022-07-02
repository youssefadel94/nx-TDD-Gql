describe('spacex', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('yadel-root').should('exist');
    cy.get('router-outlet').should('exist');

  });
  beforeEach(() => cy.visit('/'))
  it('should redirect to home and render home components', () => {
    cy.url().should('include', 'home')
    cy.get('yadel-slider').should('exist');
    cy.get('yadel-rockets-list').should('exist');
  })



});
