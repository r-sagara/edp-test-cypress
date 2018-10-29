// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
function typeCreds(name="admin", pass="admin") {
    cy.get('form').within(() => {
        cy.contains('Nickname')
            .next().type(name)
        cy.contains('Password')
            .next().type(pass)
        cy.contains('Join').click()
    })
}

Cypress.Commands.add('login', (name="admin", pass="admin") => {
    cy.visit('/')
    typeCreds(name, pass)
})

Cypress.Commands.add('checkLogin', () => {
    cy.get('body').then($body => {
        //cy.log(!($body.find('menu').length))
        if(!($body.find('.menu').length)) {
            typeCreds()
        }
    })
})