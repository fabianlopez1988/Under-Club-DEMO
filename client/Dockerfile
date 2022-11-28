FROM node:16.15.1

WORKDIR /client-test

COPY package.json package.json ./
COPY package-lock.json package-lock.json ./

COPY ./ ./

RUN ["npm", "install"]

EXPOSE 3000

CMD ["npm", "start"]