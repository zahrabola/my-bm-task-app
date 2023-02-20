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
/* Email Test - Dev task - email test 
Line 3: Visit the URL of the app.
Line 5: Confirms you are submitting a form. 
Line 6 to 8: Check if the input fields for Name, Email address and Subject should be visible and required.
Line 9: Verify the text area where you can type in your description of the various temperature within the different cities. 
Line 10 to 11: Check that the button (type - submit) is clicked and not disabled. The code is used to test if the email sent page is displaying the correct information and fulfils all the requirements.
*/
