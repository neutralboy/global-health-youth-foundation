FROM node:14.15.1-alpine3.10
WORKDIR /app
COPY ["package.json", "./"]   
RUN yarn install
COPY . .
EXPOSE 3000