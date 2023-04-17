import { When, Then, Given, Before, And } from "@badeball/cypress-cucumber-preprocessor";
/// <reference types="cypress" />

  Before(() =>{
    cy.fixture('demo_blaze').then((datos) =>{
        datosFixture = datos
    });
  });

  Given('A user opens the demo blaze page', () =>{
    const baseUrl = Cypress.config().baseUrl; // Obtiene la URL base sin la barra al final
    cy.visit(baseUrl);
  });

  When('A user enter username {string}', (user) =>{
    cy.get('#signInModalLabel').should('exist');
    const numero = Math.floor(Math.random() * 1000);
    cy.get('#signin2').click();
    const username = user + numero
    cy.get('#sign-username').type(username);
  });

  When('A user enter the {string}',(password) =>{
    cy.get('#sign-password').type(password);
  });

  When('A user clicks in register button', () =>{
    cy.get('[type="button"]').contains('Sign up').click();
  });

  Then('A user must see an alert with message {string}', (alertMessage) => {
    cy.on('window:alert',(alertMessage) => {

      expect(alertMessage).to.equal(expectedMessage);

      cy.window().then((win) => {
        win.alert('Aceptar');
      });
    });    
  });

