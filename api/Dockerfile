FROM node:latest

WORKDIR /api-test

COPY package.json ./
COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "dev"]
