# nodejs-rest-bookapi

### Description
This is a REST API developed with NodeJs, Express and MongoDB.

### Test locally
#### Prerequisites
1- Install NodeJs 

https://nodejs.org/en/

2- Install MongoDB

https://www.mongodb.com/

Add the repository /data/db/ if it does not exist on the disk, MongoDB is installed on. 
Example : C:/data/db. 
Add "C:\Program Files\MongoDB\Server\3.2\bin" to the "Path" environment variable.
Use the following command in a command line terminal:
```
mongod
```

3- Install Git if not installed

#### Test

1- Fetch the source code from Github
```
git clone https://github.com/raymasson/nodejs-rest-bookapi
```

2- Small Change in code

In "app.js", comment the following line:
```
mongoose.connect('mongodb://mongo/bookAPI');
```
In "app.js", uncomment the following line:
```
mongoose.connect('mongodb://localhost/bookAPI');
```

3- Run the api with one of the following commands:
```
node app.js
npm start
gulp
```

### Test with docker
#### Prerequisite
1- Install docker

https://docs.docker.com/engine/installation/

2- Install docker-compose

https://docs.docker.com/compose/install/

3- Install Git

#### Test
1- Fetch the source code from Github
```
git clone https://github.com/raymasson/nodejs-rest-bookapi
```

2- Execute the following command:
```
docker-compose up
```

### Useful links
https://app.pluralsight.com/player?course=node-js-express-rest-web-services&author=jonathan-mills&name=node-js-express-rest-web-services-m1&clip=0

https://app.pluralsight.com/library/courses/docker-containers-big-picture/table-of-contents

https://app.pluralsight.com/library/courses/docker-getting-started/table-of-contents

https://app.pluralsight.com/player?course=docker-deep-dive&author=nigel-poulton&name=docker-deep-dive-m3&clip=3
