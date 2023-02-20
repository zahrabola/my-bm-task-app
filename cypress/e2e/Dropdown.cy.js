    ///selecting dropdown options by its value 

describe('Dev task - DropDown and input filter test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('verify dropdown with select - Temperature ', () => {
        
        cy.get("#category-filter").select("10°C or more")
        .invoke("val")
        .should("eq","10°C or more")   
        cy.get("#category-filter").select("Less than 10°C")
        .invoke("val")
        .should("eq","Less than 10°C")   
        cy.get("#category-filter").blur()
    })
 
    it ('verifydropdown with select - Region ', () => {
        cy.get("#region-filter")
        .select("South West, England").should("have.value","South West, England")
        cy.get("#region-filter")
        .select("West Midlands, England").should("have.value", "West Midlands, England")
        cy.get("#region-filter")
        .select("Scotland").should("have.value","Scotland")
        cy.get("#region-filter")
        .select("London, England").should("have.value", "London, England")
        cy.get("#region-filter")
        .select("North West, England").should("have.value","North West, England")
        cy.get("#region-filter")
        .select("Wales").should("have.value", "Wales")
        cy.get("#region-filter")
       .select("Yorkshire").should("have.value","Yorkshire")
       cy.get("#region-filter").blur()
    })

    it('verify weather search filter - Bath', () => {
        cy.get("[data-cy='cityname']").type("Bath").click()
        cy.get("[data-cy='cityweather']").contains("Bath")
    })
    it.skip('verify weather search filter - Coventry', () => {
       cy.get("[data-cy='cityname']").type("Coventry").click()
       cy.get("[data-cy='cityweather']").contains("Coventry")
    })
    it.skip('verify weather search filter - Edinburgh', () => {
        cy.get("[data-cy='cityname']").type("Edinburgh").click()
        cy.get("[data-cy='cityweather']").contains("Edinburgh")
     })
     it.skip('verify weather search filter - London', () => {
        cy.get("[data-cy='cityname']").type("City of London").click()
        cy.get("[data-cy='cityweather']").contains("City of London")
     })
     it.skip('verify weather search filter - Manchester', () => {
        cy.get("[data-cy='cityname']").type("Manchester").click()
        cy.get("[data-cy='cityweather']").contains("Manchester")
     })
     it.skip('verify weather search filter - Plymouth', () => {
        cy.get("[data-cy='cityname']").type("Plymouth").click()
        cy.get("[data-cy='cityweather']").contains("Plymouth")
     })
     it.skip('verify weather search filter - Swansea', () => {
        cy.get("[data-cy='cityname']").type("Swansea").click()
        cy.get("[data-cy='cityweather']").contains("Swansea")
     })
     it.skip('verify weather search filter - York', () => {
        cy.get("[data-cy='cityname']").type("York").click()
        cy.get("[data-cy='cityweather']").contains("York")
     })
     it.skip('verify weather search filter - Liverpool', () => {
        cy.get("[data-cy='cityname']").type("Liverpool").click()
        cy.get("[data-cy='cityweather']").contains("Liverpool")
     })
     it.skip('verify weather search filter - Aberdeen', () => {
        cy.get("[data-cy='cityname']").type("Aberdeen").click()
        cy.get("[data-cy='cityweather']").contains("Aberdeen")
     })

})


/*Drop down text - Dev task - Dropdown and input filter test.
Line 5: Visit the URL of the app.
Line 9 to 15: Verify that the dropdown has a select box with "10°C or more" selected. If it does, then the code should return 10°C or more weather card element with the correct selected value. If it doesn't, then the code should return Less than 10°C weather card element options. The test should check if the new dropdown selected state, of the application is what is expected. 
Line 19 to 33: Verify that the dropdown has a select box with values for South West, England, West Midlands, England, Scotland, London, England, North West, England, Wales and Yorkshire. The code will verify that the dropdown has the correct values (weather card element) for each of the regions.
Line 36 to 38: Verify that the code will search (interact - type) for the word "Bath" in the query, and then click (enter button) for the results. The test check if new state of application is as expected.
Between 40 to 75: .skip is used to only execute the current test (Bath).  
 */

