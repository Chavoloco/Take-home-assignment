class Account {
    get userDropdownUsername() { return cy.get('div.info span.username') }
    get logoutBtn() { return cy.get('button.btn-logout') }

    public logout() {
        this.logoutBtn.click()
    }

}

export const account: Account = new Account()