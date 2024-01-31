/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        encrypt(dataToEncrypt: string): Chainable<string>;
        decrypt(encryptedData: string): Chainable<string>;
    }
}