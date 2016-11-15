#NodeJS Book REST API : Dockerfile
#Build image based on the latest version of node
FROM node:latest

#Image maintained by Raymond MASSON
MAINTAINER Raymond MASSON

#Install the api dependencies with "npm" AND Create a repository "app" in the container
RUN npm install && mkdir -p /app

#Copy the api sources in the "app" repository
COPY . /app	

#Set the repository "app" as work directory
WORKDIR /app

#Expose the api on port 3000
EXPOSE 3000

#Command used to run the api
CMD ["npm", "start"]
