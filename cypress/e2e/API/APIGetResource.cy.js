describe('GET', function () {
    it('API Body', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
            });
    });


    

    it('Reqres API GET', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/{resource}',

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

            expect(response.body.data[0]).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value' )
            expect(response.body.data[0].id).to.eq(1)
            expect(response.body.data[0].name).to.eq('cerulean')
            expect(response.body.data[0].year).to.eq(2000)
            expect(response.body.data[0].color).to.eq('#98B2D1')
            expect(response.body.data[0].pantone_value).to.eq('15-4020')

            expect(response.body.data[1]).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value' )
            expect(response.body.data[1].id).to.eq(2)
            expect(response.body.data[1].name).to.eq('fuchsia rose')
            expect(response.body.data[1].year).to.eq(2001)
            expect(response.body.data[1].color).to.eq('#C74375')
            expect(response.body.data[1].pantone_value).to.eq('17-2031')

            expect(response.body.data[2]).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value' )
            expect(response.body.data[2].id).to.eq(3)
            expect(response.body.data[2].name).to.eq('true red')
            expect(response.body.data[2].year).to.eq(2002)
            expect(response.body.data[2].color).to.eq('#BF1932')
            expect(response.body.data[2].pantone_value).to.eq('19-1664')

            expect(response.body.data[3]).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value' )
            expect(response.body.data[3].id).to.eq(4)
            expect(response.body.data[3].name).to.eq('aqua sky')
            expect(response.body.data[3].year).to.eq(2003)
            expect(response.body.data[3].color).to.eq('#7BC4C4')
            expect(response.body.data[3].pantone_value).to.eq('14-4811')

            expect(response.body.data[4]).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value' )
            expect(response.body.data[4].id).to.eq(5)
            expect(response.body.data[4].name).to.eq('tigerlily')
            expect(response.body.data[4].year).to.eq(2004)
            expect(response.body.data[4].color).to.eq('#E2583E')
            expect(response.body.data[4].pantone_value).to.eq('17-1456')

            expect(response.body.data[5]).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value' )
            expect(response.body.data[5].id).to.eq(6)
            expect(response.body.data[5].name).to.eq('blue turquoise')
            expect(response.body.data[5].year).to.eq(2005)
            expect(response.body.data[5].color).to.eq('#53B0AE')
            expect(response.body.data[5].pantone_value).to.eq('15-5217')

        })
    })
})