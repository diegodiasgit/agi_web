describe('Pesquisa de artigo', () => {

  beforeEach('Acessar landing page', () => {
    cy.visit('/blog')
  })

  it('Consulta com retorno de busca', () => {
    cy.get('.ast-builder-layout-element.ast-flex.site-header-focus-item.ast-header-search')
    .eq(0)
    .click()
    
    cy.get('[placeholder="Digite sua busca"]')
      .eq(0)
      .type('agibank{enter}')

    cy.get('.page-title.ast-archive-title').should('contain', 'agibank')
    cy.get('#main').find('article').should('exist')
    cy.get('#main').find('article').should('be.visible')
  })

  it('Consulta sem retorno de busca', () => {
    cy.get('.ast-builder-layout-element.ast-flex.site-header-focus-item.ast-header-search')
    .eq(0)
    .click()

    cy.get('[placeholder="Digite sua busca"]').type('xpto{enter}')
    cy.get('.no-results.not-found').should('contain', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
    cy.get('#main').find('article').should('not.exist')
  })
})