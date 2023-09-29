## EPENDENCIES INSTALATION **

** DOCKER ***
## Remove Old Docker Versions (if any): It's a good practice to remove any older versions of Docker first. You can do this with the following command:
1. sudo apt-get remove docker docker-engine docker.io containerd runc

## Please note that this command is specific to Debian-based systems like Ubuntu. For other distributions, the command might be different.

# Update Package Manager Cache:
2. sudo apt-get update

# Install Required Dependencies:
3. sudo apt-get install apt-transport-https ca-certificates curl software-properties-common

# Add Docker GPG Key:
3. curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Be sure to replace the URL with the Docker repository appropriate for your Linux distribution if you're not using Ubuntu.
# Add Docker Repository:

4. echo "deb [signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update Package Manager Cache Again:
5. sudo apt-get update

# Install Docker Engine:
6. sudo apt-get install docker-ce docker-ce-cli containerd.io

# Start and Enable the Docker Service:
7. sudo systemctl start docker
*  sudo systemctl enable docker

# finalyy digite
8. docker --version

## KUBECTL INSTALATION, IN THIS CASE WE GONNA USE UBUNTU
# Update the package manager cache
9. sudo apt-get update

# Install kubectl
10. sudo apt-get install -y kubectl

# After installation, you can verify that kubectl is correctly installed by running:
11.kubectl version --client


### MINIKUBE INSTALATIO

# # Update the package manager cache
12. sudo apt-get update

# Install curl and virtualization dependencies (if not already installed)
13. sudo apt-get install -y curl
14. sudo apt-get install -y virtualbox virtualbox-ext-pack

# Download and install Minikube
15. curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
16. sudo install minikube-linux-amd64 /usr/local/bin/minikube

17. minikube version

# To execute a project that involves Docker and assumes you have a DockerHub account, follow these steps:

# Building your container image:
1. docker build - t YOUR IMAGE NAME .
# VISUALIZING YOUR CREATED IMAGE
2. docker images
# MAPPING PORT TO GET YOUR WEB APPLICATION
3. docker run -d -p 3000:3000 YOUR IMAGE NAME OR ID
# VISUALIZING YOUR CONTAINER IMAGE
4. docker ps
# GETTING YOUR WEB APPLICATION ON GENERATED IP
5. ip addr
# RUNNING YOUR CONTAINER
6. docker run -f YOUR ID CONTAINER
# OPENING YOUR DOCKERHUB ACCESS your user and password is required
7. docker login
# PUSHING APP TO DOCKERHUB PLATAFORM
8. docker push YOUR IMAGE NAME: latest
# VISUALIZE YOUR MINIKUBE IF IS IT RUNNING
9. minikube status
# is not put it running
10. minijube start
# Execute your deployment file
11. kubectl apply -f deployment.yml
# LOOK IT IF IS UP
12. kubectl get deployment
# VISUALIZNG PODS
13. kubectl get pods
# EXECUTE YOUR SERVICES FILE
14. kubectl apply -f service.yml
# look your services if is running
15. kubectl get svc
# PUT YOUR APP RUNNING ON KUBERNETES
16. minikube service nodeapp-service
