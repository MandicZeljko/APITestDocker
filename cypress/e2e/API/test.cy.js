describe('DELETE resource Id', function () {
    it('All resources', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/login/1'
        }).should((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })

    
})