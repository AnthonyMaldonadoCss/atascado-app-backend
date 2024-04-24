FROM node:18

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

RUN npm install --global @nestjs/cli

COPY . .

COPY .env.development .

CMD npm run start auth 