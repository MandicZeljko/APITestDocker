describe('GET resource ID', function () {

    it('All API resources', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
            });
    })

    it('GET resource ID 1', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}/1'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
            })


        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}/1',

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property('url', 'https://reqres.in/#support-heading')
            expect(response.body.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!')

            expect(response.body).to.have.property('data')

            //expect(response.body.data.length).to.be.eq(1)

            expect(response.body.data).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value')
            expect(response.body.data.id).to.eq(1)
            expect(response.body.data.name).to.eq('cerulean')
            expect(response.body.data.year).to.eq(2000)
            expect(response.body.data.color).to.eq('#98B2D1')
            expect(response.body.data.pantone_value).to.eq('15-4020')


        })


    })
    it('GET resource ID 2', () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}/2'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
            })


        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}/2',

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property('url', 'https://reqres.in/#support-heading')
            expect(response.body.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!')

            expect(response.body).to.have.property('data')

            //expect(response.body.data.length).to.be.eq(1)

            expect(response.body.data).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value')
            expect(response.body.data.id).to.eq(2)
            expect(response.body.data.name).to.eq('fuchsia rose')
            expect(response.body.data.year).to.eq(2001)
            expect(response.body.data.color).to.eq('#C74375')
            expect(response.body.data.pantone_value).to.eq('17-2031')

        })
    })
    it('GET resource ID 3', () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}/3'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
            })


        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}/3',

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property('url', 'https://reqres.in/#support-heading')
            expect(response.body.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!')

            expect(response.body).to.have.property('data')

            //expect(response.body.data.length).to.be.eq(1)

            expect(response.body.data).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value' )
            expect(response.body.data.id).to.eq(3)
            expect(response.body.data.name).to.eq('true red')
            expect(response.body.data.year).to.eq(2002)
            expect(response.body.data.color).to.eq('#BF1932')
            expect(response.body.data.pantone_value).to.eq('19-1664')


        })
    })
    it('GET resource ID 4', () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}/4'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
            })


        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}/4',

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property('url', 'https://reqres.in/#support-heading')
            expect(response.body.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!')

            expect(response.body).to.have.property('data')

            //expect(response.body.data.length).to.be.eq(1)

            expect(response.body.data).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value' )
            expect(response.body.data.id).to.eq(4)
            expect(response.body.data.name).to.eq('aqua sky')
            expect(response.body.data.year).to.eq(2003)
            expect(response.body.data.color).to.eq('#7BC4C4')
            expect(response.body.data.pantone_value).to.eq('14-4811')


        })
    })
    it('GET resource ID 5', () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}/5'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
            })


        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}/5',

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property('url', 'https://reqres.in/#support-heading')
            expect(response.body.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!')

            expect(response.body).to.have.property('data')

            //expect(response.body.data.length).to.be.eq(1)

            expect(response.body.data).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value' )
            expect(response.body.data.id).to.eq(5)
            expect(response.body.data.name).to.eq('tigerlily')
            expect(response.body.data.year).to.eq(2004)
            expect(response.body.data.color).to.eq('#E2583E')
            expect(response.body.data.pantone_value).to.eq('17-1456')


        })
    })
    it('GET resource ID 6', () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}/6'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
            })


        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}/6',

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property('url', 'https://reqres.in/#support-heading')
            expect(response.body.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!')

            expect(response.body).to.have.property('data')


            expect(response.body.data).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value' )
            expect(response.body.data.id).to.eq(6)
            expect(response.body.data.name).to.eq('blue turquoise')
            expect(response.body.data.year).to.eq(2005)
            expect(response.body.data.color).to.eq('#53B0AE')
            expect(response.body.data.pantone_value).to.eq('15-5217')


        })
    })
})
