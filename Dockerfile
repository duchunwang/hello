FROM node:alpine

ADD package.json /usr/src/
WORKDIR /usr/src/

RUN npm install

ADD server.js /usr/src/

ENTRYPOINT node server.js

EXPOSE 80 