/*eslint-disable */
// https://docs.cypress.io/api/introduction/api.html
Cypress.cy.onUncaughtException = function () { }

describe('test menu', () => {
  beforeEach(() => {
    cy.visit(Cypress.env("HOST"));
  });

  it('new game', () => {
    cy.get('.menu-total span').next().contains('0');
    cy.get('.menu-bonus span').next().contains('0');
    cy.get('.menu-content .table .tbody').children().should('have.length', 0);
  });

  it('item action', () => {
    cy.get('.items-container .item').first().click();
    cy.get('.menu-total span').next().contains('50');
    cy.get('.menu-bonus span').next().contains('0');
    cy.get('.menu-content .table .tbody').children().should('have.length', 1);
    cy.get('.menu-content .table .tbody .table-row div').first().contains('A');
    cy.get('.menu-content .table .tbody .table-row div').next().contains('1');
    cy.get('.menu-content .table .tbody .table-row div').next().next().contains('50');
  });

  it('Bonus - A', () => {
    cy.get('.items-container .item').first().click();
    cy.get('.items-container .item').first().click();
    cy.get('.items-container .item').first().click();

    cy.get('.menu-total span').next().contains('200');
    cy.get('.menu-bonus span').next().contains('50');
    cy.get('.menu-content .table .tbody').children().should('have.length', 1);

    cy.get('.menu-content .table .tbody .table-row').first().get('div').contains('A');
    cy.get('.menu-content .table .tbody .table-row').first().get('div').next().contains('3');
    cy.get('.menu-content .table .tbody .table-row').first().get('div').next().next().contains('200');
  });

  it('Bonus - B', () => {
    cy.get('.items-container .item').next().first().click();
    cy.get('.items-container .item').next().first().click();

    cy.get('.menu-total span').next().contains('90');
    cy.get('.menu-bonus span').next().contains('30');
    cy.get('.menu-content .table .tbody').children().should('have.length', 1);

    cy.get('.menu-content .table .tbody .table-row').first().get('div').contains('B');
    cy.get('.menu-content .table .tbody .table-row').first().get('div').next().contains('2');
    cy.get('.menu-content .table .tbody .table-row').first().get('div').next().next().contains('90');
  });

  it('mix action', () => {
    cy.get('.items-container .item').next().first().click();
    cy.get('.items-container .item').first().click();
    cy.get('.items-container .item').next().next().first().click();
    cy.get('.items-container .item').next().next().first().click();
    cy.get('.items-container .item').next().next().first().click();
    cy.get('.items-container .item').next().next().next().first().click();
    cy.get('.items-container .item').next().next().next().first().click();

    cy.get('.menu-total span').next().contains('170');
    cy.get('.menu-bonus span').next().contains('0');
    cy.get('.menu-content .table .tbody').children().should('have.length', 4);

    cy.get('.menu-content .table .tbody .table-row').first().get('div').contains('B');
    cy.get('.menu-content .table .tbody .table-row').first().get('div').next().contains('1');
    cy.get('.menu-content .table .tbody .table-row').first().get('div').next().next().contains('30');


    cy.get('.menu-content .table .tbody .table-row').next().get('div').contains('A');
    cy.get('.menu-content .table .tbody .table-row').next().get('div').next().contains('1');
    cy.get('.menu-content .table .tbody .table-row').next().get('div').next().next().contains('50');

    cy.get('.menu-content .table .tbody .table-row').next().next().get('div').contains('C');
    cy.get('.menu-content .table .tbody .table-row').next().next().get('div').next().contains('3');
    cy.get('.menu-content .table .tbody .table-row').next().next().get('div').next().next().contains('60');

    cy.get('.menu-content .table .tbody .table-row').next().next().next().get('div').contains('D');
    cy.get('.menu-content .table .tbody .table-row').next().next().next().get('div').next().contains('2');
    cy.get('.menu-content .table .tbody .table-row').next().next().next().get('div').next().next().contains('30');

  });

  it('reset score', () => {
    cy.get('.items-container .item').first().click();
    cy.get('.menu .menu-reset .menu-reset-button').click();
    cy.get('.menu-total span').next().contains('0');
    cy.get('.menu-bonus span').next().contains('0');
    cy.get('.menu-content .table .tbody').children().should('have.length', 0);
  });

  it('tablet portrait', () => {
    cy.viewport('ipad-2', 'portrait');
    cy.get('.menu-total span').next().contains('0');
    cy.get('.menu-bonus span').next().contains('0');
    cy.get('.menu-content .table .tbody').children().should('have.length', 0);
  });

  it('tablet landscape', () => {
    cy.viewport('ipad-2', 'landscape');
    cy.get('.menu-total span').next().contains('0');
    cy.get('.menu-bonus span').next().contains('0');
    cy.get('.menu-content .table .tbody').children().should('have.length', 0);
  });

});
/*eslint-enable */