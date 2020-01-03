FROM node:12.14.0-alpine3.9

WORKDIR /backend

COPY package.json /backend
RUN npm install

COPY . /backend
CMD node server.js

EXPOSE 3001
