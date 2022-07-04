import { getGreeting, getInput, getRocketCards, getRocketTitle, getViewButton } from '../support/app.po';

describe('spacex', () => {

  beforeEach(() => cy.visit('/home'));

  it('should display input instruction', () => {
    getGreeting().contains('Enter number of rockets to display');
  })

  it('can input limit and see no more than limit', () => {
    getInput().type('4');
    getRocketCards().should('have.length.lte', 4);
  })

  it('can enter limit and view details of rocket', () => {
    getInput().type('1');
    getRocketCards().should('have.length.lte', 1);
    getViewButton().first().click();
    cy.url().should('include', '/rocket');
  })

  it('should contain detail component', () => {
    getInput().type('1');
    getRocketCards().should('have.length.lte', 1);
    getViewButton().first().click();
    getRocketCards().should('exist').should('have.length', 1);
  });

  it('can enter limit then view first rocket with same name as rocket picked', () => {
    getInput().type('1');
    getRocketCards().should('have.length.lte', 1);
    getRocketTitle().first().invoke('text').then(text => {
      getViewButton().first().click();
      cy.url().should('include', '/rocket');
      getRocketTitle().contains(text.trim());
    });
  })

  it('can enter limit then view first rocket with same name as rocket picked and go back to list', () => {
    getInput().type('1');
    getRocketCards().should('have.length.lte', 1);
    getRocketTitle().first().invoke('text').then(text => {
      getViewButton().first().click();
      cy.url().should('include', '/rocket');
      getRocketTitle().contains(text.trim());
      cy.go('back');
      cy.url().should('include', '/home');
    });
  })

  it('can enter limit then view first rocket with same name as rocket picked and go back to list and go back to list then view another rocket', () => {
    getInput().type('2');
    getRocketCards().should('have.length.lte', 2);
    getRocketTitle().first().invoke('text').then(text => {
      getViewButton().first().click();
      cy.url().should('include', '/rocket');
      getRocketTitle().contains(text.trim());
      cy.go('back');
      cy.url().should('include', '/home');
      getRocketTitle().eq(1).invoke('text').then(text => {
        getViewButton().eq(1).click();
        cy.url().should('include', '/rocket');
        getRocketTitle().contains(text.trim());
      })
    });
  })

});
