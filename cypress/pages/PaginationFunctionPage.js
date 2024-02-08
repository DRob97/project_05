class PaginationFunctionPage{
    // locators
    getMainHeading(){
        return cy.get('h1[class]')
    }

    getSubHeading(){
        return cy.get('#sub_heading')
    }

    getParagraph(){
        return cy.get('#content')
    }

    getPreviousButton(){
        return cy.get('#previous')
    }

    getNextButton(){
        return cy.get('#next')
    }

    getSlides(){
        return cy.get('.circle')
    }

    getInfo(){
        return cy.get('.Pagination_pagBodyData__vG6oj p')
    }

    getImage(){
        return cy.get('.city_image')
    }

    getCityName(){
        return cy.get('.city_info')
    }

    // methods
    getHeading(headingText){
        switch(headingText){
            case 'Pagination':
                return this.getMainHeading()
            case 'World City Populations 2022':
                return this.getSubHeading()
            default:
                throw new Error(`${headingText} heading was not found`)
        }
    }

    getButton(buttonPurpose){
        switch(buttonPurpose){
            case 'Previous':
                return this.getPreviousButton()
            case 'Next':
                return this.getNextButton()
            default:
                throw new Error(`${buttonPurpose} button was not found`)
        }
    }

    clickButton(buttonPurpose){
        this.getButton(buttonPurpose).click()
    }

    // getCity(cityName){
    //     switch(cityName){
    //         default:
    //             throw new Error(`${cityName} was not found`)
    //     }
    // }
}

module.exports = PaginationFunctionPage