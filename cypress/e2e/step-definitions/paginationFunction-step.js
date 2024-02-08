const { Given, Then, When } = require('@badeball/cypress-cucumber-preprocessor')
const PaginationFunctionPage = require('../../pages/PaginationFunctionPage')


const paginationFunctionPage = new PaginationFunctionPage()

// Scenario 1
Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
})


Then(/^the user should see the "([^"]*)" heading$/, (headingText) => {
	paginationFunctionPage.getHeading(headingText).should('be.visible')
})


Then(/^the user should see the "([^"]*)" paragraph$/, () => {
	paginationFunctionPage.getParagraph().should('be.visible')
})

// Scenario 2
Then(/^the user should see the "([^"]*)" button is disabled$/, (buttonPurpose) => {
	paginationFunctionPage.getButton(buttonPurpose).should('not.be.enabled')
})


Then(/^the user should see the "([^"]*)" button is enabled$/, (buttonPurpose) => {
	paginationFunctionPage.getButton(buttonPurpose).should('be.enabled')
})


When(/^the user clicks on the "([^"]*)" button$/, (buttonPurpose) => {
	paginationFunctionPage.clickButton(buttonPurpose)
})


When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (buttonPurpose) => {
    paginationFunctionPage.getSlides().each(() => {
        paginationFunctionPage.getButton(buttonPurpose).click({force: true})
    })

    paginationFunctionPage.getButton(buttonPurpose).should('not.be.enabled')
})

// Scenario 3
Then(/^the user should see "([^"]*)" City with the info below and an image$/, (city, dataTable) => {
	const currCity = dataTable.rawTable.flat()

    paginationFunctionPage.getCityName().should('contain', city)

    paginationFunctionPage.getInfo().each(($el, index) => {
        cy.wrap($el).should('have.text', currCity[index])
    })

    paginationFunctionPage.getImage().should('be.visible')
})