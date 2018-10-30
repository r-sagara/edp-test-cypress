describe('Types testing', () => {
    before(() => {
        cy.login()
    });

    beforeEach(() => {
        cy.checkLogin()
        cy.checkPage('/home/type')
    });

    it.only('User creates a type (general case)', () => {
        cy.contains('Create new type').click()
        
        cy.get('[formcontrolname="lang"]').as('lang') /*.checkAttr('placeholder', 'Language')*/
        cy.log('START')
        cy.get('@lang').console('info') //TODO check console output
        cy.log('END')
        cy.get('@lang').click()
        cy.contains('Portuguese').click()
        //TODO make separated function and extract the object of types
        cy.get('[formcontrolname="title"]').as('title')
            .invoke('attr', 'placeholder').should('eq', 'Enter title')
        cy.get('@title').type('TitlePT')

        cy.get('[formcontrolname="description"]').as('descr')
            .invoke('attr', 'placeholder').should('eq', 'Enter short description')
        cy.get('@descr').type('DescriptionPT')
    });
});