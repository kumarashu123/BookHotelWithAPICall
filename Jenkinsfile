pipeline {
    agent any
    triggers {
      cron '* * * * *'
    }
    stages {
        stage('Stage 1') {
            steps {
                echo '<Hello world!>' 
            }
        }
         stage('Stage 2') {
            steps {
                echo '<Hello!>' 
            }
        }
    }
}
