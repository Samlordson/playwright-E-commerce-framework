pipeline {

    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    stages {

        stage('Checkout Source') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Execute Playwright Tests') {
            steps {
                catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                    bat 'npx playwright test'
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'allure generate allure-results --clean -o allure-report'
            }
        }
    }

    post {

        always {

            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
            archiveArtifacts artifacts: 'test-results/**', fingerprint: true

            junit allowEmptyResults: true,
                  testResults: 'test-results/**/*.xml'

            echo 'Build Completed'
        }

        success {
            echo 'Playwright Execution Successful'
        }

        unstable {
            echo 'Tests Failed. Reports Generated.'
        }

        failure {
            echo 'Pipeline Failed'
        }
    }
}