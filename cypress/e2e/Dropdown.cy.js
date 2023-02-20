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

    it('verify weather search', () => {
        cy.get("[data-cy='cityname']").type("Bath").click()

    })
})

////*cy.get('select')
  /////.select(['456', '457'])
 // .invoke('val')
 // .should('deep.equal', ['456', '457'])

 
 ///['South West, England', 'West Midlands, England','Scotland','London, England','North West, England','Wales','Yorkshire']
 //"South West, England","West Midlands, England","Scotland", "'London, England", "North West, England", "Wales","Yorkshire"