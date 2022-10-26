
describe('POST log in user', () => {
    it('Log in existing user', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/logout',
        }).then((response) => {
            expect(response.status).to.eq(200)
        
        }).should((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })
})
   
        