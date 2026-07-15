pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Diagnostics') {
            steps {
                bat 'echo ====================='
                bat 'echo Jenkins User'
                bat 'whoami'

                bat 'echo ====================='
                bat 'echo Host Name'
                bat 'hostname'

                bat 'echo ====================='
                bat 'echo Username'
                bat 'echo %USERNAME%'

                bat 'echo ====================='
                bat 'echo User Profile'
                bat 'echo %USERPROFILE%'

                bat 'echo ====================='
                bat 'echo Java'
                bat 'java -version'

                bat 'echo ====================='
                bat 'echo Node'
                bat 'node -v'

                bat 'echo ====================='
                bat 'echo npm'
                bat 'npm -v'

                bat 'echo ====================='
                bat 'echo Playwright'
                bat 'npx playwright --version'

                bat 'echo ====================='
                bat 'echo Chrome'
                bat 'where chrome'

                bat 'echo ====================='
                bat 'echo Edge'
                bat 'where msedge'

                bat 'echo ====================='
                bat 'echo Workspace'
                bat 'dir'

                bat 'echo ====================='
                bat 'echo Auth Folder'
                bat 'dir playwright'

                bat 'echo ====================='
                bat 'echo Auth File'
                bat 'dir playwright\\.auth'

                bat 'echo ====================='
                bat 'echo Internet'
                bat 'curl https://www.saucedemo.com'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Login Setup Only') {
            steps {
                bat 'npx playwright test tests/auth/login.setup.ts --project=setup'
            }
        }

    }

    post {
        always {
            archiveArtifacts artifacts: '**/*', fingerprint: true
        }
    }
}