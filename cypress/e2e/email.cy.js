describe('Dev task - email test', () => {
    it('handling email sent', () => {
        cy.visit('http://localhost:3000')
    
        cy.get("form").submit()
        cy.get("#fullname").type("Zahra Olnrewaju").should("be.visible","required")
        cy.get('input[type="email"]').type("BoomerangMsg2@outlook.com").should("be.visible","required")
        cy.get("#subject").type('Dev Task').should("be.visible","required")
        cy.get("textarea").type('Description')
        cy.get('button[type=submit]').click().and("not.be.disabled")
        cy.get("#submitted").should("exist")
        
    })
})
