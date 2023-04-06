/// <reference types="cypress" />
import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      getByDataCy(
        dataCy: string,
        options?: Parameters<typeof cy.get>[1]
      ): Cypress.JQuery<HTMLElement>;
      findByDataCy(
        dataCy: string,
        options?: Parameters<typeof cy.find>[1]
      ): Chainable<Element>;
    }
  }
}
