FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "-H", "0.0.0.0", "--port", "4200"]
