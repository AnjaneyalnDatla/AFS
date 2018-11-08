pipeline{
	agent any
	  stages {

		   // cloning code into the container
        stage('Clone the latest code'){
         environment {
                BITBUCKET_COMMON_CREDS = credentials('anj-bitbucket')
            }
            //removing old code if there is any, initializing new local repo and cloning into it.
            steps{
                sh 'rm -rf afs-portal && git init && git clone https://$BITBUCKET_COMMON_CREDS_USR:$BITBUCKET_COMMON_CREDS_PSW@bitbucket.org/a2ninesrkr/afs-portal.git'
            }
        }
		stage("Install Dependencies"){
			steps{
				sh "npm install"
			}
		}
        stage("Create build"){
			steps{
				sh "npm run build-dev"
			}
		}
		stage("Create Docker Image"){
			steps{
					sh 'whoami'
					sh 'docker build -t afs-portal:${BUILD_NUMBER} .'
			}
		}
		stage("Clean up old Docker Images and containers"){
			steps{
					sh 'docker stop afs-portal || true && docker rm afs-portal || true docker rmi $(docker images |grep afs-portal) || true'
					sh 'docker tag afs-portal:${BUILD_NUMBER} afs-portal:${BUILD_NUMBER}'
			}
		}
		stage("Run App"){
			steps{
					sh 'docker run -d --name afs-portal -p 90:80 afs-portal:${BUILD_NUMBER}'
			}
		}
	}
}


