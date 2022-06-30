describe('spacex', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('yadel-nx-welcome').should('exist');
  });
});