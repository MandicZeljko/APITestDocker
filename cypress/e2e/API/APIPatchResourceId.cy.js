

describe('PATCH resource Id ', function () {
it('All resources',() =>{
    cy.request({
        method: 'GET',
        url:'https://reqres.in/api/{resource}'
    }).should((response) => {
        cy.log(JSON.stringify(response.body))
    });
})

    it('Reqres API PATCH resource 1', () => {

        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/{resource}/1',
            headers: {
                'accept': 'application/json'
            },
            body: {
                data: {
                    "id": 1,
                    "name": "cerulean",
                    "year": 20099,
                    "color": "#98B2D1",
                    "pantone_value": "15-8"
                }
            }
        }).then((response) => {
            cy.log(JSON.stringify(response.data))
            expect(response.body.data).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value')
            expect(response.body.data.id).to.eq(1)
            expect(response.body.data.name).to.eq('cerulean')
            expect(response.body.data.year).to.eq(20099)
            expect(response.body.data.color).to.eq('#98B2D1')
            expect(response.body.data.pantone_value).to.eq('15-8')
        })
    })
    it('Reqres API PATCH resource 2', () => {

        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/{resource}/2',
            headers: {
                'accept': 'application/json'
            },
            body: {

                data: {
                    "id": 2,
                    "name": "roses",
                    "year": 3099,
                    "color": "#C74375",
                    "pantone_value": "17-2031"
                }
            }
        }).then((response) => {
            cy.log(JSON.stringify(response.data))
            expect(response.body.data).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value')
            expect(response.body.data.id).to.eq(2)
            expect(response.body.data.name).to.eq('roses')
            expect(response.body.data.year).to.eq(3099)
            expect(response.body.data.color).to.eq('#C74375')
            expect(response.body.data.pantone_value).to.eq('17-2031')
        })
    })
})