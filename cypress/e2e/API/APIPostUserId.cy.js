describe('POST', function () {
    //update existing user informations

    it('Reqres API POST user1', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users/1',
            headers: {
                'accept': 'application/json'
            },
            body : {
                data:{
                    "id": 1,
                    "email": "pera.pericc@reqres.in",
                    "first_name": "Peraaaa",
                    "last_name": "Peric",
                    "avatar": "https://reqres.in/img/faces/1-image.jpg"
                }
            }

        }).then((response) => {
            cy.log(JSON.stringify(response.data))
            expect(response.body.data).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar' )
            expect(response.body.data.id).to.eq(1)
            expect(response.body.data.email).to.eq('pera.peric@reqres.in')
            expect(response.body.data.first_name).to.eq('Peraaaa')
            expect(response.body.data.last_name).to.eq('Peric')
            expect(response.body.data.avatar).to.eq('https://reqres.in/img/faces/1-image.jpg')



        })

    })
})