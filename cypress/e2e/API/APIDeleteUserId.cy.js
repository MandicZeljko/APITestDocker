describe('DELETE', function () {

    it.only('Delete user 1', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/1',
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(204)          
          
        })        
    })
})