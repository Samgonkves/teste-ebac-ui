///<reference types="cypress"/>

describe('', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login =>{
            cy.login(login.usuario, login.senha)
        })
    });

    it('Completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Sara', 'Gonçalves', 'Samariag')
        cy.get('.woocommerce-message').should('exist')

        
    });
    
});