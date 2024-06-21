FROM node:12

WORKDIR \Desktop\projects\mayank webpage,database project

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm" , "start" ]