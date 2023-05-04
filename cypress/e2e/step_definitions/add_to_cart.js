import { When, Then, Given, Before, And } from "@badeball/cypress-cucumber-preprocessor";
/// <reference types="cypress" />

let datosFixture;
let numero = Math.floor(Math.random() * 1000);
let user = 'Day';
let username = user + numero;

  Before(() =>{
    cy.fixture('demo_blaze').then((datos) =>{
        datosFixture = datos
    });
  });

  Given('A user opens the demo blaze page', () =>{
    const baseUrl = Cypress.config().baseUrl; // Obtiene la URL base sin la barra al final
    cy.visit(baseUrl);
  });

  When('A user enter username', (user) =>{  
    cy.get('#signin2').click();

    cy.get('#signInModal')
    .should('have.class', 'modal')
    .and('have.class', 'fade')
    .and('have.class', 'show');

    cy.get('#sign-username').clear();
    cy.get('#sign-username').type(username).trigger('input');
  });

  When('A user enter the {string}',(password) =>{
    cy.get('#sign-password').type(password);
  });

  When('A user clicks in register button', () =>{
    cy.get('[type="button"]').contains('Sign up').dblclick();
  });

  Then('The registration modal should not be visible',()=>{
    cy.get('#signInModal')
    .should('have.class', 'modal')
    .and('have.class', 'fade')
    .and('not.have.class', 'show');
  });
  
  Given('A user should click on login btn', () => {
    cy.get('#login2').click() 
  });

  Then('Opens the modal of Login',() => {
    cy.get('#logInModal')
    .should('have.class', 'modal')
    .and('have.class', 'fade')
    .and('have.class', 'show');
  });

  When('A user enter the username as register',() =>{
    cy.get('#loginusername').clear();
    cy.get('#loginusername').type(username);
  });

  When('A user enter the login password {string}',(password) =>{
    cy.get('#loginpassword').type(password);
  });

  When ('A user clicks in log in button', () => {
    cy.get('[type="button"]').contains('Log in').click();
  });

  Then('The login modal should not be visible', () => {
    cy.get('#logInModal')
    .should('have.class', 'modal')
    .and('have.class', 'fade')
    .and('not.have.class', 'show');
  });

  Then('the navbar should have the name of the user', () => {
    cy.get('#nameofuser')
    .should('have.text', `Welcome ${username}`)
    .invoke('text').then((linktext) =>{
      expect(linktext).to.equal(`Welcome ${username}`);
    });
  });





