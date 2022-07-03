import { getGreeting, getInput, getRocketCards, getRocketTitle, getSearchButton, getViewButton } from '../support/app.po';

describe('spacex', () => {
  beforeEach(() => cy.visit('/home'));

  // it('should display welcome message', () => {
  //   // Custom command example, see `../support/commands.ts` file
  //   cy.login('my-email@something.com', 'myPassword');

  //   // Function helper example, see `../support/app.po.ts` file
  //   getGreeting().contains('Welcome spacex');
  // });
  it('should display input instruction', () => {
    const greating = getGreeting()
      greating.contains('Enter number of rockets to display');
  })
  it('can input limit and see no more than limit', () => {

    const input = getInput();
    getInput().type('4');
    // TODO: change input to mat slider and update tests
    // cy.findByLabelText("Some slider")
    //   .focus()
    //   .type("{rightarrow}{rightarrow}{rightarrow}");
    // getSearchButton().click();
    getRocketCards().should('have.length.lte', 4);
  })
  it('can enter limit and view details of rocket', () => {
    getInput().type('1');
    // getSearchButton().click();
    getRocketCards().should('have.length.lte', 1);
    getViewButton().first().click();
    cy.url().should('include', '/rocket');
  })
  // beforeEach(() => cy.visit('/detail'))
  it('should contain detail component', () => {
    getInput().type('1');
    // getSearchButton().click();
    getRocketCards().should('have.length.lte', 1);
    getViewButton().first().click();
    getRocketCards().should('exist').should('have.length', 1);
  });
  it('can enter limit then view first rocket with same name as rocket picked', () => {
    getInput().type('1');
    // getSearchButton().click();
    getRocketCards().should('have.length.lte', 1);
    getRocketTitle().first().invoke('text').then(text => {
      getViewButton().first().click();
      cy.url().should('include', '/rocket');
      getRocketTitle().contains(text.trim());
    });

  })

  it('can enter limit then view first rocket with same name as rocket picked and go back to list', () => {
    getInput().type('1');
    // getSearchButton().click();
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
    // getSearchButton().click();
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
