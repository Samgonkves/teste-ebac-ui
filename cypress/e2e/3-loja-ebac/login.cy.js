///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Fazer login com sucesso', () => {
        cy.get('#username').type('saramariags@gmail.com')
        cy.get('#password').type('tEST$OFT5')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, saramariags')
    })

    it('Exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('saramaria@gmail.com')
        cy.get('#password').type('tEST$OFT5')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Exibir senha inválida', () => {
        cy.get('#username').type('saramariags@gmail.com')
        cy.get('#password').type('tEST$T5')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Perdeu a senha?')
        cy.get('.woocommerce-error > li').should('exist')
        
    });

    it('Novo login com sucesso - Massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, saramariags')
})

it.only('Novo login com sucesso - Fixture', () => {
    cy.fixture('perfil').then( dados => {
        cy.get('#username').type(dados.usuario, {log:false})
        cy.get('#password').type(dados.senha, {log:false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, saramariags')
    })
       
});

})