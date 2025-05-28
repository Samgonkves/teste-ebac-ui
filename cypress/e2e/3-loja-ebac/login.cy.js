///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('saramariags@gmail.com')
        cy.get('#password').type('tEST$OFT5')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, saramariags')
    })
})