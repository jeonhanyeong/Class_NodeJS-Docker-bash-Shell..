FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

ADD https://github.com/jeonhanyeong/anew/tree/main/docker/node-docker-test/app.js ./

EXPOSE 8000

CMD ["node","app.js"]
