FROM node:10-alpine 

WORKDIR /app 

COPY package.json package.json 

RUN npm install 

COPY . . 

EXPOSE 80

CMD [ "npm", "start" ] // start server inside container
