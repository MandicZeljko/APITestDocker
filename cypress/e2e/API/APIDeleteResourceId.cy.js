describe('DELETE resource Id', function () {
    it('All resources', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/resource'
        }).should((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })

    it('Delete resource Id 12', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/resource/12',
            
        }).then((response) => {
            expect(response.status).to.eq(204)

        }).should((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })
})