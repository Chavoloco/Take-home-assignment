import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Home from "../../fixtures/pageobjects/home.ts";
import Login from "../../fixtures/pageobjects/login.ts";

When("I visit homepage", () => {
    cy.visit("/");
});

Then('I click on Reject Unnecessary Cookies', () => {
    cy.get(Home.rejectCookiesBtn).click()
    cy.wait(2500)
})

Then("I click on Sign in button", () => {
    cy.get(Home.signInBtn).click()
    cy.wait(2500)
    cy.url().should('contain', 'oauth.beatstars.com/')
    cy.get("input[type='email']").should('exist')
});

Then('I fill username input with userDetails data', () => {
    cy.fixture("userDetails.json").then((data) => {
        cy.get(Login.usernameInput).type(data.email)
        cy.get(Login.submitUsernameBtn).click()
    })
    cy.get('bs-vb-validation-message div').should('not.exist')
    cy.wait(2500)
    cy.get('div.btns-container').should('be.visible')
    cy.wait(500)
    cy.fixture("userDetails.json").then((data) => {
        cy.get('input[type="password"]').type(data.password)
        cy.get('bs-square-button#btn-submit-oath').click()
    })
    cy.get(' ng-component.ng-star-inserted').should('exist')
    cy.fixture("userDetails.json").then((data) => {
        const c = cy.encrypt(data.email)
        cy.decrypt(String(c))
    })
})