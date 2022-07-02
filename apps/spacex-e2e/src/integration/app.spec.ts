import { getGreeting, getInput, getRocketCards, getRocketTitle, getSearchButton, getViewButton } from '../support/app.po';

describe('spacex', () => {
  beforeEach(() => cy.visit('/'));
  it('should redirect to home', () => {
    cy.url().should('include', 'home')
  })
  // it('should display welcome message', () => {
  //   // Custom command example, see `../support/commands.ts` file
  //   cy.login('my-email@something.com', 'myPassword');

  //   // Function helper example, see `../support/app.po.ts` file
  //   getGreeting().contains('Welcome spacex');
  // });
  it('should display input instruction', () => {
    getGreeting().contains('Enter number of rockets to display');
  })
  it('can input limit and see no more than limit', () => {
    getInput().type('4');
    getSearchButton().click();
    getRocketCards().should('be.lte', 4);
  })
  it('can enter limit and view details of rocket', () => {
    getInput().type('1');
    getSearchButton().click();
    getRocketCards().should('have.length', 1);
    getViewButton().first().click();
    cy.url().should('include', '/rocket/');
  })
  it('can enter limit then view first rocket with same name as rocket picked', () => {
    getInput().type('1');
    getSearchButton().click();
    getRocketCards().should('have.length', 1);
    getRocketTitle().first().invoke('text').then(text => {
      getViewButton().first().click();
      cy.url().should('include', '/rocket/');
      cy.get('h1').contains(text.trim());
    });

  })

  beforeEach(() => cy.visit('/detail'))
  it('should contain detail component', () => {
    cy.get('yadel-rockets-detail').should('exist');
  });
});
