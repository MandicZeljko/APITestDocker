describe('POST resgister a user', () => {
    it('Resgister new user', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',

            body: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.all.keys('id', 'token')
            expect(response.body.id).to.eq(4)
            expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4')
        }) .should((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })
    it('Resgister new user with incorect data', () => {
       
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            failOnStatusCode: false,

            body: {
                "email": "sydney@fife"

            }

        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.all.keys('error')
            expect(response.body.error).to.eq('Missing password')
            }) .should((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })
})