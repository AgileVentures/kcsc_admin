/* eslint-disable no-undef */
import sizes from '../support/index'
import TestHelpers from '../support/testhelper'

describe('Admin Can Edit Testimonials', () => {
  sizes.forEach((size) => {
    describe(`and edit Testimonials info on ${size}`, () => {
      beforeEach(() => {
        cy.intercept('GET', '**/app_data', {
          fixture: 'app_data.json',
        })
        TestHelpers.sizeParameters(size)
        cy.visit('/')
        TestHelpers.authenticate()
        const selection = 'testimonials'
        TestHelpers.sizeCase(size, selection)
      })

      context('successfully', () => {
        beforeEach(() => {
          cy.intercept('DELETE', '**/app_data**', {
            statusCode: 200,
          })
        })

        it('is expected to open confirm delete testimonial model', () => {
          cy.get('[data-cy=testimonials-table]').within(() => {
            cy.get('[data-cy=testimonial]')
              .first()
              .within(() => {
                cy.get('[data-cy=delete-testimonial-btn]').click()
              })
          })
          cy.get('[data-cy=confirm-delete-btn]').should('be.visible')
          cy.get('[data-cy=cancel-btn]').should('be.visible')
          cy.get('[data-cy=modal-message]').should(
            'contain',
            'Are you sure you want to delete this testimonial?'
          )
        })

        it('is expected to show success message on submit', () => {
          cy.get('[data-cy=testimonials-table]').within(() => {
            cy.get('[data-cy=testimonial]')
              .first()
              .within(() => {
                cy.get('[data-cy=delete-testimonial-btn]').click()
              })
          })
          cy.get('[data-cy=confirm-delete-btn]').click()
          cy.get('[data-cy=snack-content]').should(
            'contain.text',
            'Info has been updated'
          )
        })
      })

      context('unsuccessfully', () => {
        beforeEach(() => {
          cy.intercept('DELETE', '**/app_data**', {
            statusCode: 422,
          })
          cy.get('[data-cy=testimonials-table]').within(() => {
            cy.get('[data-cy=testimonial]')
              .first()
              .within(() => {
                cy.get('[data-cy=delete-testimonial-btn]').click()
              })
          })
        })

        it('is expected to show error message on submit', () => {
          cy.get('[data-cy=confirm-delete-btn]').click()
          cy.get('[data-cy=snack-content]').should(
            'contain.text',
            'Request failed with status code 422'
          )
        })
      })
    })
  })
})
