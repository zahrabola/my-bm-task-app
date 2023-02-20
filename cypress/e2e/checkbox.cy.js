describe('Dev task - checkbox', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('verify checkbox', () => {
        cy.get('[type="checkbox"]')
        .check() 
        .should("be.checked")
        .not('[disabled]') 
        cy.get("#check-submitted").should("exist")
    })
})
/*Checkbox test - Dev task – checkbox
Line 3: Visit the URL of the app.
Line 6 to 10: Verifies that the checkbox is checked and is not disabled.
 */