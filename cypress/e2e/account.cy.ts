/// <reference types="Cypress" />
/// <reference path="../support/index.d.ts" />

import { account } from "../fixtures/pageobjects/account"
import {home} from "../fixtures/pageobjects/home"
import {login} from "../fixtures/pageobjects/login"
import { encrypt, decrypt } from "../fixtures/pageobjects/utils/cryptoUtil"
import { generateRandomMail } from "../fixtures/pageobjects/utils/emailUtil"
import { UserDetails } from "../fixtures/userDetails.interface"

let userData: UserDetails

describe('Login Scenario', () => {
    beforeEach(() => {
        home.launchApp()
        cy.fixture('userDetails.json').then(function (data) {
            userData = data
        })
        
    })
    context('Home page', () => {
        it('should visit homepage with successfully status code', () => {
            cy.request('/').its('status').should('equal', 200)
            cy.wait(2500)
            home.searchContainer.should('exist')
        })

        it('should visit home page and click "Reject Unnessesary Cookies" button', () => {
            home.rejectCookies()
        })
    })

    context('Login Test Suite', () => {

        it('should visit home page and Go to Login page', () => {
            home.rejectCookies()
            home.goToLoginPage()
            cy.url().should('contain', 'oauth.beatstars.com')
            login.usernameInput.should('exist')
            login.continueWithFacebookBtn.should('exist')
            login.continueWithTwitterBtn.should('exist')
            login.continueWithAppleBtn.should('exist')
            //login.googleIframe.its('0').its('contentWindow').should('exist')
        })

        it('should successfully go to account page', () => {
            home.rejectCookies()
            home.goToLoginPage()
            login.fillLoginForm(decrypt(userData.email), decrypt(userData.password))
            login.verificationCodeContainer.should('exist')
        })

        it('should fill login form with invalid data', () => {
            home.rejectCookies()
            home.goToLoginPage()
            login.fillLoginFormInexistentUser(userData.invalidUsername)
            login.usernameInput.should('be.visible')
            login.passwordInput.first().should('be.visible')
        })

        it('should successfuly create a new user', () => {
            home.rejectCookies()
            home.goToSignUpPage()
            cy.url().should('contain', 'oauth.beatstars.com')
            login.usernameInput.should('exist')
            login.continueWithFacebookBtn.should('exist')
            login.continueWithTwitterBtn.should('exist')
            login.continueWithAppleBtn.should('exist')

            login.fillSignUpForm(generateRandomMail(), decrypt(userData.password))
        })
    })

})