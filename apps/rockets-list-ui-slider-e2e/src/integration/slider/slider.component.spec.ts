describe('rockets-list-ui-slider', () => {

  beforeEach(() => cy.visit('/iframe.html?id=slidercomponent--primary'));

  it('should render the component', () => {
    cy.get('yadel-slider').should('exist');
  });
  // TODO: e2e testing
});
