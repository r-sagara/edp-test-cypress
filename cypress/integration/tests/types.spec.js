describe('Types testing', () => {
    before(() => {
        cy.login()
    });

    beforeEach(() => {
        cy.checkLogin()
    });

    it('User creates a type (general case)', () => {
        cy.visit('/home/type')
    });
});