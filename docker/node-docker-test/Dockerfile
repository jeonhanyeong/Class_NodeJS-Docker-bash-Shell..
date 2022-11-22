FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY ./routes/main.js ./

EXPOSE 8000

CMD ["node","./routes/main.js"]
