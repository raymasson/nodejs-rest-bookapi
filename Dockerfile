#NodeJS Book REST API
FROM node:latest

MAINTAINER Raymond MASSON

RUN npm install
RUN mkdir -p /app

COPY . /app	

WORKDIR /app

EXPOSE 3000

CMD ["npm", "start"]
