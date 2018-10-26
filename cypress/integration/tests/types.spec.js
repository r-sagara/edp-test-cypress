describe('Types testing', () => {
    before(() => {
        const name = "admin"
        const pass = "admin"
        cy.login(name, pass)
    });

    beforeEach(() => {
        cy.checkLogin()
    });

    it('User creates a type (general case)', () => {
        cy.visit('/home/type')
    });
});