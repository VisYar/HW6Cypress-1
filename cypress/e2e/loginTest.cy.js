/// <reference types="cypress"/>

let emailFirst = 'test@test.com';
let passFirst = 'test';
let emailSecond = 'bropet@mail.ru';
let passSecond = '123';

describe('login process', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('logins successfully with correct credentials', () => {
    cy.login(emailFirst, passFirst)
    cy.contains('Добро пожаловать test@test.com')
      .should('be.visible');
  })

  it('shows ERROR when login is not entered', () => {
    cy.login(null, passSecond);
    cy.get('#mail')
      .then((el) => el[0].checkValidity())
      .should('be.false');
    cy.get('#mail')
      .then((el) => el[0].validationMessage)
      .should('contain', 'Заполните это поле.');
  })

  it('shows ERROR when password is not entered', () => {
    cy.login(emailSecond, null);
    cy.get('#pass')
      .then((el) => el[0].checkValidity())
      .should('be.false');
    cy.get('#pass')
      .then((el) => el[0].validationMessage)
      .should('contain', 'Заполните это поле.');
  })
})