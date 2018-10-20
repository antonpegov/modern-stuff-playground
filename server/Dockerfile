FROM node:8.12.0
MAINTAINER Anton Pegov <antonpegov@gmail.com>

WORKDIR /opt/server

COPY *.json .
COPY yarn.lock .
COPY . . 

# RUN npm i -g yarn
ENV PORT 8000
EXPOSE 8000  
CMD ["yarn", "start"]  