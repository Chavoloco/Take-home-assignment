import { account } from "./account"
import { home } from "./home"

const Logins = {
    "usernameInput": "input[type='email']",
    "submitUsernameBtn": "bs-square-button[id='btn-submit-oath']",
    "continueWithFacebookBtn": "img[alt='Facebook Logo'] + bs-square-button",
    "continueWithTwitterBtn": "img[alt='Twitter Logo'] + bs-square-button",
    "continueWithAppleBtn": "img[alt='Apple Logo'] + bs-square-button",
    "googleIframe": "iframe[id='gsi_59409_587547']",
    "errorInputMessage": "bs-vb-validation-message div",
    "loggedUsernameSpan": "div.info span.username"
}

class Login {
    get usernameInput() { return cy.get("input[type='email']") }
    get submitUsernameBtn() { return cy.get("bs-square-button[id='btn-submit-oath']") }
    get continueWithFacebookBtn() { return cy.get("img[alt='Facebook Logo'] + bs-square-button") }
    get continueWithTwitterBtn() { return cy.get("img[alt='Twitter Logo'] + bs-square-button") }
    get continueWithAppleBtn() { return cy.get("img[alt='Apple Logo'] + bs-square-button") }
    get googleIframe() { return cy.get("iframe[id='gsi_59409_587547']") }
    get errorInputMessage() { return cy.get("bs-vb-validation-message div") }
    get loggedUsernameSpan() { return cy.get("div.info span.username") }
    get loginModal() { return cy.get("div.btns-container") }
    get passwordInput() { return cy.get('input[type="password"]') }
    get submitPasswordBtn() { return cy.get('bs-square-button#btn-submit-oath') }
    get verificationCodeContainer() { return cy.get('ng-component.ng-star-inserted') }

    public fillLoginForm(username: string, password: string) {
        home.goToLoginPage()
        this.usernameInput.type(username)
        this.submitUsernameBtn.click()
        this.errorInputMessage.should('not.exist')
        cy.wait(2500)
        this.loginModal.should('be.visible')
        cy.wait(500)
        this.passwordInput.type(password)
        this.submitPasswordBtn.click()
        cy.wait(2500)
        
    }

    public fillLoginFormInexistentUser(username: string) {
        home.goToLoginPage()
        this.usernameInput.type(username)
        this.submitUsernameBtn.click()
        this.errorInputMessage.should('not.exist')
    }
}



export const login: Login = new Login()