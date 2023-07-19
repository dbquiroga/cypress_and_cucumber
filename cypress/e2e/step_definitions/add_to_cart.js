import { When, Then, Given, Before, And } from "@badeball/cypress-cucumber-preprocessor";
import { Login } from '../support/pages/login.page.js'
const baseUrl = Cypress.config().baseUrl;

const loginPage = new Login();
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
    cy.visit(baseUrl);
  });

  When('A user enter username', () =>{  
    loginPage.clickNavbarSignin()
    cy.get(loginPage.signinModal).should('be.visible');
    loginPage.typeUser(username)
  });

  When('A user enter the {string}',(password) =>{
    loginPage.typePass(password);
  });

  When('A user clicks in register button', () =>{
    loginPage.clickSignupBtn()
  });

  Then('The registration modal should not be visible',()=>{
    cy.get(loginPage.signinModal).should('not.be.visible', { timeout: 7000 });
  });

  Given('A user should click on login btn', () => {
    loginPage.clickNavbarLogin()
  });

  Then('Opens the modal of Login',() => {
    cy.get(loginPage.loginModal).should('be.visible')
  });

  When('A user enter the username as register',() =>{
    loginPage.clearLoginUsername()
    loginPage.typeUser(username)
  });

  When('A user enter the login password {string}',(password) =>{
    loginPage.typrePass(password)
  });

  When ('A user clicks in log in button', () => {
    loginPage.clickLogin();
  });

  Then('The login modal should not be visible', () => {
    cy.get(loginPage.loginModal).should('not.be.visible', { timeout: 7000 });
  });

  Then('the navbar should have the name of the user', () => {
    cy.get(loginPage.nameUser)
    .should('have.text', `Welcome ${username}`);
  });

  When('A user clicks on the button Laptops',() => {
    cy.get(`[onclick="byCat('notebook')"]`)
    .click(); 

    cy.wait(1000)
  });

  When('A user clicks on the first laptop', ()=> {
    cy.get('#tbodyid div a').first()
    .click()
  });

  Then('The url should contains a query string', () => {
    cy.url().should('include', 'idp');
  });

  When('A user click on Add to cart', () => {
    cy.wait(1000)
    cy.get('a').contains('Add to cart') 
  });

  Then('An alert should appears with text {string}', (alertProductAdded) => {
    cy.on('window:alert', (str) => {
      expect(str).should('contain', alertProductAdded)
    });
  });
