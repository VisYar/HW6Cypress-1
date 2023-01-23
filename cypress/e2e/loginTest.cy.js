/// <reference types="cypress"/>

describe('login process', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('logins successfully with correct credentials', () => {
    cy.login('test@test.com', 'test')
    cy.contains('Добро пожаловать test@test.com').should('be.visible');
  })

  it('shows ERROR when login is not entered', () => {
    cy.login(null, 'test')
    cy.get('#mail').then((el) => {
      return el[0].checkValidity()
    }).should('be.false');
    cy.get('#mail').then((el) => {
      return el[0].validationMessage
    }).should('contain', 'Заполните это поле.');
  })

  it('shows ERROR when password is not entered', () => {
    cy.login('test@test.com', null)
    cy.get('#pass').then((el) => {
      return el[0].checkValidity()
    }).should('be.false');
    cy.get('#pass').then((el) => {
      return el[0].validationMessage
    }).should('contain', 'Заполните это поле.');
  })
})