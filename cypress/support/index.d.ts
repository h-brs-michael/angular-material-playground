// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to navigate to Page by link-name in the side-nav.
     * @example cy.navigateToPage('Page 2')
     */
    navigateToPage(value: string): void;
  }
}
