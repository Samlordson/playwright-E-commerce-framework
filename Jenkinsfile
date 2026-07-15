pipeline {
    agent any

    stages {

        stage('Checkout Code') {
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

        stage('Check Internet') {
            steps {
                bat 'curl https://www.saucedemo.com'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
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
        }

        success {
            echo 'Playwright Tests Passed!'
        }

        failure {
            echo 'Playwright Tests Failed!'
        }
    }
}