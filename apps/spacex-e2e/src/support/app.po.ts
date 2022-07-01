export const getGreeting = () => cy.get('h1');
//get the limiter slider with id limiter and type number
export const getInput = () => cy.get('input[type="number"]#limiter');
//get the search button with id search
export const getSearchButton = () => cy.get('button#search');
//get view button with id 1 and type button
export const getViewButton = () => cy.get('button');
export const getRocketTitle = () => cy.get('h2');

export const getRocketCards = () => cy.get('rocket-card');
