FROM node:11-stretch-slim

WORKDIR /usr/src/node-app

COPY package.json /usr/src/node-app/

RUN npm install

COPY . /usr/src/node-app

EXPOSE 9000
