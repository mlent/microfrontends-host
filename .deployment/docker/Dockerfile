FROM node:8.1.4-alpine
RUN apk update
RUN apk add yarn

ARG COMMIT_REF
ARG BUILD_DATE

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn 

COPY . .

RUN yarn build

ENV APP_COMMIT_REF=${COMMIT_REF} \
    APP_BUILD_DATE=${BUILD_DATE}

EXPOSE 3000

CMD ["yarn", "start"]
