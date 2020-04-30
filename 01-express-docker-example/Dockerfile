FROM node:12.16.1-alpine3.11

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

CMD [ "yarn", "start" ]
