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
    const numero = Math.floor(Math.random() * 1000);
    cy.get('#signin2').click();

    cy.get('#signInModal')
    .should('have.class', 'modal')
    .and('have.class', 'fade')
    .and('have.class', 'show');

    const username = user + numero

    cy.get('#sign-username').clear();
    cy.get('#sign-username').type(username).trigger('input');
  });

  When('A user enter the {string}',(password) =>{
    cy.get('#sign-password').type(password);
  });

  When('A user clicks in register button', () =>{
    cy.get('[type="button"]').contains('Sign up').dblclick();
  });
  

