/* eslint-disable no-undef */
import sizes from '../support/index'
import TestHelpers from '../support/testhelper'

describe('Admin Can Switch Article to be a Case Study', () => {
  sizes.forEach((size) => {
    describe(`successfully on ${size}`, () => {
      const selection = 'articles-dashboard'
      beforeEach(() => {
        cy.intercept('GET', '**/articles', {
          fixture: 'all_articles.json',
        })
        cy.intercept('PUT', '**/articles/**', {
          statusCode: 200,
        })
        cy.visit('/')
        TestHelpers.authenticate()
        TestHelpers.sizeParameters(size)
        TestHelpers.sizeCase(size, selection)
      })

      context('successfully, by clicking `case study` switch', () => {
        it('is expected to show success message', () => {
          cy.get('[data-cy=case-study-switch-1]').click()
          cy.get('[data-cy=snack-content]').should(
            'contain',
            'Article has been updated'
          )
        })
      })
    })

    context('unsuccessfully, by clicking `case study` switch', () => {
      beforeEach(() => {
        cy.intercept('PUT', '**/articles/**', {
          statusCode: 400,
        })
      })
      it('is expected to show error message', () => {
        cy.get('[data-cy=publish-1]').click()
        cy.get('[data-cy=snack-content]').should('contain', 'Request failed with status code 400')
      })
    })
  })
})
