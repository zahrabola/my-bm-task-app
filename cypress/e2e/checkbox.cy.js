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
