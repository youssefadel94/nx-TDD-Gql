export const getGreeting = () => cy.get('h1');
//get the limiter slider with id limiter and type number
export const getInput = () => cy.get('input#range', { timeout: 10000 })
  .should('be.visible');
//get the search button with id search
export const getSearchButton = () => cy.get('button');
//get view button with id 1 and type button
export const getViewButton = () => cy.get('button');
export const getRocketTitle = () => cy.get('mat-card-title');

export const getRocketCards = () => cy.get('yadel-rocket-card');
