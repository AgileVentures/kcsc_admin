// /* eslint-disable no-undef */
// import sizes from '../support/index'
// import TestHelpers from '../support/testhelper'

// describe('Admin Can Use Navigation Dashboard', () => {
//   sizes.forEach((size) => {
//       const selection = 'navigation'
//       beforeEach(() => {
//         TestHelpers.sizeParameters(size)
//         cy.intercept('GET', '**/app_data', {
//           fixture: 'app_data.json',
//         })
//         cy.intercept('PUT', '**/app_data**', {
//           statusCode: 200,
//         })
//         cy.visit('/')
//         TestHelpers.authenticate()
//         TestHelpers.sizeCase(size, selection)
//       })

//       describe(`and edit Navigation info ${size}`, () => {
//         it('is expected to show navigation accordion with pre-filled form in details', () => {
//           cy.get('[data-cy=navigation-form]').within(() => {
//             cy.get('[data-cy=tab-input]')
//               .first()
//               .find('input')
//               .should('have.value', 'home')
//             // uncomment when add switches back
//             // cy.get('[data-cy=tab-switch]').should('have.length', 14)
//           })
//         })

//         context('successfully', () => {
//           it('is expected to show success message on submit', () => {
//             cy.get('[data-cy=navigation-submit-button]').click()
//             cy.get('[data-cy=snack-content]').should(
//               'contain.text',
//               'Info has been updated'
//             )
//           })
//         })

//         context('unsuccessfully', () => {
//           beforeEach(() => {
//             cy.intercept('PUT', '**/app_data**', {
//               statusCode: 400,
//             })
//           })

//           it('is expected to show success message on submit', () => {
//             cy.get('[data-cy=navigation-submit-button]').click()
//             cy.get('[data-cy=snack-content]').should(
//               'contain.text',
//               'Request failed with status code 400'
//             )
//           })
//         })
//       })
//     })
//   })
