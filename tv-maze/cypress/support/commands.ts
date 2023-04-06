/// <reference types="cypress" />
// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("getByDataCy", (dataCy, options) => {
  return cy.get(`[data-cy="${dataCy}"]`, options);
});

Cypress.Commands.add(
  "findByDataCy",
  { prevSubject: true },
  (subject, dataCy, options) => {
    return subject.find(`[data-cy="${dataCy}"]`, options);
  }
);
