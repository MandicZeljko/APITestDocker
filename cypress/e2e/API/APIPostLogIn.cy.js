
describe('POST log in user', () => {
    it('Log in existing user', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.all.keys('token')
            expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4')
        }) .should((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })
    it('Log in without password', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            failOnStatusCode: false,

            body: {
                "email": "peter@klaven"

                
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