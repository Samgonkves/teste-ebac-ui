/// <reference types = 'cypress'/>

describe('Funcionalidades:Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Selecionar produto', () => {
        cy.get('.product-block')
        //.first()
        //.eq(4)
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()
        cy.get('.single_add_to_cart_button').should('exist')
    });
    
});