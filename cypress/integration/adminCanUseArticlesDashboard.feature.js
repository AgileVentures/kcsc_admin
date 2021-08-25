/* eslint-disable no-undef */
import sizes from '../support/index'
import TestHelpers from '../support/testhelper'

describe('Admin Can Use Articles Dashboard', () => {
  sizes.forEach((size) => {
    describe(`admin can navigate to articles dashboard on ${size}`, () => {
      beforeEach(() => {
        cy.intercept('GET', '**/api/articles', {
          fixture: 'all_articles.json',
        })
        TestHelpers.sizeParameters(size)
        cy.visit('/')
        TestHelpers.authenticate()
        cy.visit('/articles')
      })

      it('is expected to show a table with the list of all articles', () => {
        cy.get('[data-cy=articles-table]').within(() => {
          cy.get('[data-cy=article]')
            .should('have.length', 6)
            .first()
            .within(() => {
              cy.get('[data-cy=status]').should('be.visible')
              cy.get('[data-cy=title]').should(
                'contain.text',
                'Most recent article'
              )
              cy.get('[data-cy=author]').should('contain.text', 'Liu Kang')
              cy.get('[data-cy=date]').should('contain.text', '2021-05-12')
              cy.get('[data-cy=action]').scrollIntoView().should('be.visible')
            })
        })
      })
      describe('Admin is able to preview an article', () => {
        beforeEach(() => {
          cy.intercept('GET', '**/api/articles/1', {
            fixture: 'single_article.json',
          })
        })

        it('is expected to preview the article', () => {
          cy.get('[data-cy=article-preview-button]').first().click()
          cy.get('[data-cy=article-container]').within(() => {
            cy.get('[data-cy=title]').should('contain', 'Suicide rate decreased with 88%')
            cy.get('[data-cy=author]').should('contain', 'Sonya Blade')
            cy.get('[data-cy=date]').should('contain', '2021-05-11')
            cy.get('[data-cy=image]').should('have.attr', 'alt').should('equal', 'Doctor holding tablet')
            cy.get('[data-cy=body]').should('contain', 'Everywhere you look you see the words self-care, self-help, self-love, and wellness')
            cy.get('[data-cy=close-btn]').click()
          })
          cy.get('[data-cy=body]').should('not.exist')
        })
      })
    })
  })
})
