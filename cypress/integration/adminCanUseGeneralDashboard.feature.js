/* eslint-disable no-undef */
import sizes from '../support/index'
import TestHelpers from '../support/testhelper'

describe('Admin Can Use General Dashboard', () => {
  sizes.forEach((size) => {
    describe('admin can navigate to articles dashboard', () => {
      beforeEach(() => {
        TestHelpers.sizeParameters(size)
        cy.intercept('PUT', '**/app_data**', {
          statusCode: 200,
        })

        cy.visit('/')
        TestHelpers.authenticate()
      })

      it('is expected to show dashboard header', () => {
        cy.get('[data-cy=dashboard-header]').should(
          'contain.text',
          'Edit General App Info'
        )
      })

      describe('and edit Footer info', () => {
        it('is expected to show footer accordion with pre-filled form in details', () => {
          cy.get('[data-cy=footer-form]').within(() => {
            cy.get('[data-cy=about-field]')
              .find('textarea')
              .should(
                'contain.text',
                'Community Health West London is a Community Interest Company'
              )

            cy.get('[data-cy=copyright-field]')
              .find('input')
              .should(
                'have.value',
                '2021 All Rights Reserved by Community Health West London.'
              )

            cy.get('[data-cy=accessability-field]')
              .find('input')
              .should(
                'have.value',
                'This site is built according to Web Content Accessibility Guidelines'
              )
          })
        })

        context('successfully', () => {
          beforeEach(() => {
            cy.intercept('PUT', '**/app_data**', {
              statusCode: 200,
            })
          })

          it('is expected to show success message on submit', () => {
            cy.get('[data-cy=footer-submit-button]').click()
            cy.get('[data-cy=snack-content]').should(
              'contain.text',
              'Info has been updated'
            )
          })
        })

        context('unsuccessfully', () => {
          beforeEach(() => {
            cy.intercept('PUT', '**/app_data**', {
              statusCode: 400,
              body: {
                error_message: 'Something went wrong, try again later',
              },
            })
          })
          it('is expected to show error message on submit', () => {
            cy.get('[data-cy=footer-submit-button]').click()
            cy.get('[data-cy=snack-content]').should(
              'contain.text',
              'Something went wrong, try again later'
            )
          })
        })
      })
    })
  })
})
