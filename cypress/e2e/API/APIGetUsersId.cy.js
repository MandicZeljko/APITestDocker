describe('GET', function () {

    it('API body', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}/'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
            });
    });

    it('Reqres API GET user1', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/1',
            

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property('url', 'https://reqres.in/#support-heading')
            expect(response.body.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!')
            
            expect(response.body).to.have.property('data')

            expect(response.body.data).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar' )
            expect(response.body.data.id).to.eq(1)
            expect(response.body.data.email).to.eq('george.bluth@reqres.in')
            expect(response.body.data.first_name).to.eq('George')
            expect(response.body.data.last_name).to.eq('Bluth')
            expect(response.body.data.avatar).to.eq('https://reqres.in/img/faces/1-image.jpg')

        })
        
    })
    it('Reqres API GET user2', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2',
            

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property('url', 'https://reqres.in/#support-heading')
            expect(response.body.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!')
            
            expect(response.body).to.have.property('data')

            expect(response.body.data).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar' )
            expect(response.body.data.id).to.eq(2)
            expect(response.body.data.email).to.eq('janet.weaver@reqres.in')
            expect(response.body.data.first_name).to.eq('Janet')
            expect(response.body.data.last_name).to.eq('Weaver')
            expect(response.body.data.avatar).to.eq('https://reqres.in/img/faces/2-image.jpg')
        })
        
    })
    it('Reqres API GET user3', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/3',
            

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property('url', 'https://reqres.in/#support-heading')
            expect(response.body.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!')
            
            expect(response.body).to.have.property('data')

            expect(response.body.data).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar' )
            expect(response.body.data.id).to.eq(3)
            expect(response.body.data.email).to.eq('emma.wong@reqres.in')
            expect(response.body.data.first_name).to.eq('Emma')
            expect(response.body.data.last_name).to.eq('Wong')
            expect(response.body.data.avatar).to.eq('https://reqres.in/img/faces/3-image.jpg')

        })
        
    })
    it('Reqres API GET user4', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/4',
            

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property('url', 'https://reqres.in/#support-heading')
            expect(response.body.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!')
            
            expect(response.body).to.have.property('data')

            expect(response.body.data).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar' )
            expect(response.body.data.id).to.eq(4)
            expect(response.body.data.email).to.eq('eve.holt@reqres.in')
            expect(response.body.data.first_name).to.eq('Eve')
            expect(response.body.data.last_name).to.eq('Holt')
            expect(response.body.data.avatar).to.eq('https://reqres.in/img/faces/4-image.jpg')


        })
        
    })
    it('Reqres API GET user5', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/5',
            

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property('url', 'https://reqres.in/#support-heading')
            expect(response.body.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!')
            
            expect(response.body).to.have.property('data')

            expect(response.body.data).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar' )
            expect(response.body.data.id).to.eq(5)
            expect(response.body.data.email).to.eq('charles.morris@reqres.in')
            expect(response.body.data.first_name).to.eq('Charles')
            expect(response.body.data.last_name).to.eq('Morris')
            expect(response.body.data.avatar).to.eq('https://reqres.in/img/faces/5-image.jpg')

        })
        
    })
    it('Reqres API GET user6', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/6',
            

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property('url', 'https://reqres.in/#support-heading')
            expect(response.body.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!')
            
            expect(response.body).to.have.property('data')

            expect(response.body.data).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar' )
            expect(response.body.data.id).to.eq(6)
            expect(response.body.data.email).to.eq('tracey.ramos@reqres.in')
            expect(response.body.data.first_name).to.eq('Tracey')
            expect(response.body.data.last_name).to.eq('Ramos')
            expect(response.body.data.avatar).to.eq('https://reqres.in/img/faces/6-image.jpg')

        })
        
    })
})