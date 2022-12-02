FROM node:latest

WORKDIR /api-test

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
COPY ./server.js server.js

RUN ["npm", "install"]
CMD ["npm", "start"]

EXPOSE 5000

