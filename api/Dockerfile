FROM node:latest

WORKDIR /api

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
COPY ./server.js server.js

COPY . .

RUN ["npm", "install"]
CMD ["npm", "start"]

EXPOSE 5000
