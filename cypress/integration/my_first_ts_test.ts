describe('My First Test', () => {

  beforeEach(() => {

    cy.visit('http://localhost:4200/');
  });

  it('Visits the staring page', () => {

    cy.contains('material-playground');

    cy.get('mat-sidenav')
      .as('sidenav')
      .not('Page 2');

    cy.get('@sidenav').not('Page 3');

    cy.contains('Gruppen Link').click();

    cy.get('@sidenav')
      .contains('Page 2');
    cy.get('@sidenav')
      .contains('Page 3');

    cy.contains('Page 2');
    cy.contains('Page 3');
  });

  it('clicking example navigates to a new url', () => {

    cy.url().should('include', '/table');

    cy.contains('example').click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/example');
  });

  it('test input field on form page/ Page 2', () => {

    cy.navigateToPage('Page 2');

    cy.contains('Legacy form field');

    // approach 1:
    cy.get('mat-form-field')
      .first()
      .type('legacy');
    // .should('have.value', 'legacy');

    cy.get('input')
      .first()
      .should('have.value', 'legacy');

    // approach 2:
    cy.get('input')
      .first()
      .clear()
      .type('newValue')
      .should('have.value', 'newValue');

    // approach 3:
    cy.get('[data-cy=legacy-input]')
      .clear()
      .type('third')
      .should('have.value', 'third');
  });

  it('test tree page', () => {

    cy.navigateToPage('tree');

    cy.contains('src').should('not.exist');
    cy.contains('cdk').should('not.exist');
    cy.contains('package.json').should('not.exist');

    cy.get('mat-tree-node button')
      .first()
      .click();

    cy.contains('src');
    cy.contains('cdk').should('not.exist');
    cy.contains('package.json').should('not.exist');

    cy.get('mat-tree-node button')
      .eq(1)
      .click();

    cy.contains('src');
    cy.contains('cdk');
    cy.contains('package.json').should('not.exist');

    cy.get('mat-tree-node button')
      .eq(2)
      .click();

    cy.contains('src');
    cy.contains('cdk');
    cy.contains('package.json');
  });

});
