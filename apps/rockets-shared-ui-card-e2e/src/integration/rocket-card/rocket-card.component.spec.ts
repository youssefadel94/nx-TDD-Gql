describe('rockets-shared-ui-card', () => {
  beforeEach(() => cy.visit('/iframe.html?id=rocketcardcomponent--primary'));
  it('should render the component', () => {
    cy.get('yadel-rocket-card').should('exist');
  });
});