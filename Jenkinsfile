pipeline {
    agent any
    options{
        ansiColor('xterm')
        
    }
    stages {
        stage('API first') {
            parallel {
                
                stage('APIDeleteResourceId') {
                    steps{
                        bat 'npm install'
                         bat 'npx cypress run --config videoRecording=false --spec cypress/e2e/API/APIDeleteResourceId.cy.js'
                    }
                     
                }
                stage('APIDeleteUserId') {
                    steps{
                        bat 'npx cypress run --config videoRecording=false -- spec cypress/e2e/API/APIDeleteUserId.cy.js'
                    }
                      
                }
                stage('APIGetResource') {
                    steps{
                        bat 'npx cypress run --config videoRecording=false -- spec cypress/e2e/API/APIGetResource.cy.js'
                    }
                      
                }
            }

        }
        stage('API second'){
            parallel {
                
                stage('APIGetResourceID') {
                    steps{
                         bat 'npx cypress run   --config videoRecording=false --spec cypress/e2e/API/APIGetResourceID.cy.js'
                    }
                     
                }
                stage('APIGetUsers') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/API/APIGetUsers.cy.js'
                    }
                      
                }
                stage('APIGetUsersId') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/API/APIGetUsersId.cy.js'
                    }
                      
                }
            }
        }
        stage('API third'){
            parallel {
                
                stage('APIPatchResourceId') {
                    steps{
                         bat 'npx cypress run   --config videoRecording=false --spec cypress/e2e/API/APIPatchResourceId.cy.js'
                    }
                     
                }
                stage('APIPatchUserId') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/API/APIPatchUserId.cy.js'
                    }
                      
                }
                stage('APIPostLogIn') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/API/APIPostLogIn.cy.js'
                    }
                      
                }
            }
        }
         stage('API fourth'){
           parallel {
                
                stage('APIPostLogOut') {
                    steps{
                         bat 'npx cypress run   --config videoRecording=false --spec cypress/e2e/API/APIPostLogOut.cy.js'
                    }
                     
                }
                stage('APIPostRegisterUser') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/API/APIPostRegisterUser.cy.js'
                    }
                      
                }
                stage('APIPostUserId') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/API/APIPostUserId.cy.js'
                    }
                      
                }
                stage('APIPutResourceId') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/API/APIPutResourceId.cy.js'
                    }
                      
                }
            }
        }
        stage('API all') {
            parallel {
                
                stage('APIDeleteResourceId') {
                    steps{
                         bat 'npx cypress run --config videoRecording=false --spec cypress/e2e/API/*.cy.js'
                    }
                     
                }
                
            }

        }

    }
    
}
