const name = "admin"
const pass = "admin"

function checkLogin() {
    cy.get('body').then($body => {
        if($body.find(":contains('Link')")) {
            cy.login(name, pass)
        }
    })
}

describe('General testing', () => {
    before(() => {
        cy.login(name, pass)
    });

    it('Current URL contains /home', () => {
        cy.url().should('contain', '/home')
    });
     
    it('There are next tabs in the left menu', () => {
        const menuItems = ['Types', 'Victories']
        cy.wrap(menuItems).each(menuItem => {
            cy.contains(menuItem).click()
            checkLogin()
        })
    });

    it.only('There is the search bar', () => {
        var testText = 'TestSearch'
        cy.get('#search').invoke('attr', 'placeholder')
            .should('contain', 'Search')
        cy.get('#search').focus().type(testText)
        cy.get('#search').should('have.value', testText)
    });

});
