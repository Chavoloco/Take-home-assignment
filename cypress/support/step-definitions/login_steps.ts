// cypress/support/step_definitions/sample_steps.ts
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit the application', () => {
    cy.visit('https://beatstars.com')
});

Then('I should go to login page', () => {

});
