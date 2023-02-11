FROM node AS Build

LABEL maintainer = mujtaba, <hassanad1214@gmail.com>

WORKDIR /home/node/memory-card

COPY --chown=node:node package.json package-lock.json ./

RUN npm install

COPY ./ ./ 

RUN npm run build

FROM node:alpine

USER node

EXPOSE 8080

WORKDIR /home/node/app