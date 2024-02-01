/// <reference types="Cypress" />
/// <reference path="../support/index.d.ts" />

import Home from "../fixtures/pageobjects/home"
import Login from "../fixtures/pageobjects/login"


describe('Login Scenario', () => {
    context('Home page', () => {
        it('Visits homepage with successfully status code', () => {
            cy.visit('/')
            cy.request('/').its('status').should('equal', 200)
            cy.wait(2500)
            cy.get('bs-container-grid.search-for-beats-grid').should('exist')
        })

        it('Visit home page and click "Reject Unnessesary Cookies" button', () => {
            cy.visit('/')
            cy.get(Home.rejectCookiesBtn).click()
            cy.wait(2500)
        })
    })

    context('Login Test Suite', () => {

        it('Visit home page and Go to Login page', () => {
            cy.visit('/')
            cy.get(Home.signInBtn).click()
            cy.wait(2500)
            cy.url().should('contain', 'oauth.beatstars.com/')
            cy.get(Login.usernameInput).should('exist')
            cy.get(Login.continueWithFacebookBtn).should('exist')
            cy.get(Login.continueWithTwitterBtn).should('exist')
            cy.get(Login.continueWithAppleBtn).should('exist')
            cy.get(Login.googleIframe).its('0').its('contentWindow').should('exist')
        })

        it('Visits home page and fill username input with userDetails data', () => {
            cy.visit('/')
            cy.get(Home.signInBtn).click()
            cy.wait(2500)
            expect(cy.url()).contain('oauth.beatstars.com/')
            cy.get(Login.usernameInput).should('exist')
            cy.fixture("userDetails.json").then((data) => {
                cy.get(Login.usernameInput).type(data.email)
                cy.get(Login.submitUsernameBtn).click()
            })
            cy.get(Login.errorInputMessage).should('not.exist')
            cy.wait(2500)
            cy.get('div.btns-container').should('be.visible')
            cy.wait(500)
            cy.fixture("userDetails.json").then((data) => {
                cy.get('input[type="password"]').type(data.password)
                cy.get('bs-square-button#btn-submit-oath').click()
                cy.wait(2500)
                cy.get('div.info span.username').should('equal', data.username)
            })

        })
    })

})