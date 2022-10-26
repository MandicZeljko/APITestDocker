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
                         bat 'npx cypress run --config videoRecording=false --spec cypress/e2e/APIDeleteResourceId.cy.js'
                    }
                     
                }
                stage('APIDeleteUserId') {
                    steps{
                        bat 'npx cypress run --config videoRecording=false -- spec cypress/e2e/APIDeleteUserId.cy.js'
                    }
                      
                }
                stage('APIGetResource') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/APIGetResource.cy.js'
                    }
                      
                }
            }

        }
        stage('API second'){
            parallel {
                
                stage('APIGetResourceID') {
                    steps{
                         bat 'npx cypress run   --config videoRecording=false --spec cypress/e2e/APIGetResourceID.cy.js'
                    }
                     
                }
                stage('APIGetUsers') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/APIGetUsers.cy.js'
                    }
                      
                }
                stage('APIGetUsersId') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/APIGetUsersId.cy.js'
                    }
                      
                }
            }
        }
        stage('API third'){
            parallel {
                
                stage('APIPatchResourceId') {
                    steps{
                         bat 'npx cypress run   --config videoRecording=false --spec cypress/e2e/APIPatchResourceId.cy.js'
                    }
                     
                }
                stage('APIPatchUserId') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/APIPatchUserId.cy.js'
                    }
                      
                }
                stage('APIPostLogIn') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/APIPostLogIn.cy.js'
                    }
                      
                }
            }
        }
         stage('API fourth'){
           parallel {
                
                stage('APIPostLogOut') {
                    steps{
                         bat 'npx cypress run   --config videoRecording=false --spec cypress/e2e/APIPostLogOut.cy.js'
                    }
                     
                }
                stage('APIPostRegisterUser') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/APIPostRegisterUser.cy.js'
                    }
                      
                }
                stage('APIPostUserId') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/APIPostUserId.cy.js'
                    }
                      
                }
                stage('APIPutResourceId') {
                    steps{
                        bat 'npx cypress run  --config videoRecording=false -- spec cypress/e2e/APIPutResourceId.cy.js'
                    }
                      
                }
            }
        }
        stage('API all') {
            parallel {
                
                stage('APIDeleteResourceId') {
                    steps{
                         bat 'npx cypress run --config videoRecording=false --spec cypress/e2e/*.cy.js'
                    }
                     
                }
                
            }

        }

    }
    
}
