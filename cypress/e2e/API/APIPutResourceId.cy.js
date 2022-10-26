describe('PUT resource Id ', function () {
    it('Reqres API PUT resource 1', () => {

        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/{resource}/1',
            headers: {
                'accept': 'application/json'
            },
            body: {
                data: {
                    "id": 1,
                    "name": "cerulean",
                    "year": 2009,
                    "color": "#98B2D1",
                    "pantone_value": "15-4020"
                }
            }
        }).then((response) => {
            cy.log(JSON.stringify(response.data))
            expect(response.body.data).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value')
            expect(response.body.data.id).to.eq(1)
            expect(response.body.data.name).to.eq('cerulean')
            expect(response.body.data.year).to.eq(2009)
            expect(response.body.data.color).to.eq('#98B2D1')
            expect(response.body.data.pantone_value).to.eq('15-4020')
        })
    })
    it('Reqres API PUT resource 2', () => {

        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/{resource}/2',
            headers: {
                'accept': 'application/json'
            },
            body: {

                data: {
                    "id": 2,
                    "name": "rose",
                    "year": 2099,
                    "color": "#C74375",
                    "pantone_value": "17-2031"
                }
            }
        }).then((response) => {
            cy.log(JSON.stringify(response.data))
            expect(response.body.data).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value')
            expect(response.body.data.id).to.eq(2)
            expect(response.body.data.name).to.eq('rose')
            expect(response.body.data.year).to.eq(2099)
            expect(response.body.data.color).to.eq('#C74375')
            expect(response.body.data.pantone_value).to.eq('17-2031')
        })
    })
})