FROM node:alpine

ADD package.json /usr/src/
WORKDIR /usr/src/

RUN npm install

ADD server.js /usr/src/

EXPOSE 80