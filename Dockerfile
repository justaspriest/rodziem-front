FROM node:8

WORKDIR /usr/src/rodziem-portal

COPY package*.json ./

RUN npm install

COPY src/main/javascript/server.js .
COPY src/main/templates/index.html .
COPY src/main/resources ./resources

EXPOSE 8080
CMD [ "npm", "start" ]
