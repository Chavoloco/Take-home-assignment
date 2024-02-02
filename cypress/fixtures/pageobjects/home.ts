import { login } from "./login"

class Home {
    get rejectCookiesBtn() {return cy.get('button#onetrust-reject-all-handler')}
    get signInBtn() {return cy.get('mp-sign-in-button.btn-sign-in')}
    get signUpBtn() { return cy.get('mp-sign-up-button.btn-sign-up') }
    get searchContainer() { return cy.get('bs-container-grid.search-for-beats-grid')}

    public launchApp() {
        cy.visit('/')
    }

    public rejectCookies() {
        this.rejectCookiesBtn.click()
        cy.wait(2500)
        this.rejectCookiesBtn.should('not.be.visible')
    }

    public goToLoginPage() {
        this.signInBtn.click()
        cy.wait(2500)
    }

    public goToSignUpPage() {
        this.signUpBtn.click()
        cy.wait(2000)
    }
    
}



export const home: Home = new Home()