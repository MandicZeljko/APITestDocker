describe('GET', function () {

    it('API body', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
            });
    });

    it('Reqres API GET', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property('url', 'https://reqres.in/#support-heading')
            expect(response.body.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!')
            expect(response.body).to.have.property('page', 1)
            expect(response.body).to.have.property('per_page', 6)
            expect(response.body).to.have.property('total', 12)
            expect(response.body).to.have.property('total_pages', 2)

            expect(response.body).to.have.property('data')

            expect(response.body.data.length).to.be.eq(6)

            expect(response.body.data[0]).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar' )
            expect(response.body.data[0].id).to.eq(1)
            expect(response.body.data[0].email).to.eq('george.bluth@reqres.in')
            expect(response.body.data[0].first_name).to.eq('George')
            expect(response.body.data[0].last_name).to.eq('Bluth')
            expect(response.body.data[0].avatar).to.eq('https://reqres.in/img/faces/1-image.jpg')

            expect(response.body.data[1]).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar' )
            expect(response.body.data[1].id).to.eq(2)
            expect(response.body.data[1].email).to.eq('janet.weaver@reqres.in')
            expect(response.body.data[1].first_name).to.eq('Janet')
            expect(response.body.data[1].last_name).to.eq('Weaver')
            expect(response.body.data[1].avatar).to.eq('https://reqres.in/img/faces/2-image.jpg')

            expect(response.body.data[2]).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar' )
            expect(response.body.data[2].id).to.eq(3)
            expect(response.body.data[2].email).to.eq('emma.wong@reqres.in')
            expect(response.body.data[2].first_name).to.eq('Emma')
            expect(response.body.data[2].last_name).to.eq('Wong')
            expect(response.body.data[2].avatar).to.eq('https://reqres.in/img/faces/3-image.jpg')

            expect(response.body.data[3]).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar' )
            expect(response.body.data[3].id).to.eq(4)
            expect(response.body.data[3].email).to.eq('eve.holt@reqres.in')
            expect(response.body.data[3].first_name).to.eq('Eve')
            expect(response.body.data[3].last_name).to.eq('Holt')
            expect(response.body.data[3].avatar).to.eq('https://reqres.in/img/faces/4-image.jpg')

            expect(response.body.data[4]).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar' )
            expect(response.body.data[4].id).to.eq(5)
            expect(response.body.data[4].email).to.eq('charles.morris@reqres.in')
            expect(response.body.data[4].first_name).to.eq('Charles')
            expect(response.body.data[4].last_name).to.eq('Morris')
            expect(response.body.data[4].avatar).to.eq('https://reqres.in/img/faces/5-image.jpg')

            expect(response.body.data[5]).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar' )
            expect(response.body.data[5].id).to.eq(6)
            expect(response.body.data[5].email).to.eq('tracey.ramos@reqres.in')
            expect(response.body.data[5].first_name).to.eq('Tracey')
            expect(response.body.data[5].last_name).to.eq('Ramos')
            expect(response.body.data[5].avatar).to.eq('https://reqres.in/img/faces/6-image.jpg')

        })
    })
})