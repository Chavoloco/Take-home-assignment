import { login } from "./login"

class Home {
    get rejectCookiesBtn() {return cy.get('button#onetrust-reject-all-handler')}
    get signInBtn() {return cy.get('mp-sign-in-button.btn-sign-in')}
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
        this.rejectCookies()
        this.signInBtn.click()
        cy.wait(2500)
    }

    
}



export const home: Home = new Home()