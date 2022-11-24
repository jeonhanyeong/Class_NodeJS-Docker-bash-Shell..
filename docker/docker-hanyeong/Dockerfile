# Step 1
FROM node:16

# Step 2
WORKDIR /usr/src/app

# Step 3
RUN git clone https://github.com/jeonhanyeong/anew/tree/main/docker/docker-hanyeong
WORKDIR docker-hanyeong

RUN npm install

EXPOSE 8000

CMD ["node", "app.js"]
