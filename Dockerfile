FROM node:latest
MAINTAINER <ilovintit>
RUN npm install pm2 -g
RUN mkdir -p /app
COPY ./package.json /app
WORKDIR /app
RUN npm install
COPY . /app
RUN npm run build
CMD ["pm2-docker", "server.js"]