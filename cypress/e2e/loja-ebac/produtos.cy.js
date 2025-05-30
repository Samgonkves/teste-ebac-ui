/// <reference types = 'cypress'/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidades:Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Selecionar um produto da lista', () => {
        let jacketa = 'Augusta Pullover Jacket'
        produtosPage.buscarProduto(jacketa)
        cy.get('.product_title').should('contain', jacketa)
    })

    it('Visitar a página do produto', () => {
        //produtosPage.visitarProduto('Augusta-Pullover-Jacket')
        produtosPage.visitarProduto('Augusta Pullover Jacket')
    });

    it('Adicionar o produto no carrinho', () => {
        let calça = 'Aether Gym Pant'
        produtosPage.buscarProduto(calça)
        //cy.get('.variations > tbody > :nth-child(1)').eq(0).click()
        //cy.get('.button-variable-item-Brown').click()
        //cy.get('.single_add_to_cart_button').click()
        produtosPage.addProdutoCarrinho('36', 'Brown', '4')
        cy.get('.woocommerce-message').should('exist')
    });

    it('Adicionar o produto da massa de dados no carrinho', () => {
        cy.fixture('produtos').then(dados =>{
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho, 
                dados[1].cor, 
                dados[1].qtd)
            cy.get('.woocommerce-message').should('exist')
        }) 
    });

    it.only('Adicionar o produto da massa de dados no carrinho', () => {
        cy.fixture('produtos').then(dados =>{
            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[2].tamanho, 
                dados[1].cor, 
                dados[0].qtd)
            cy.get('.woocommerce-message').should('exist')
        }) 
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