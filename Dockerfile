FROM node:16-slim
WORKDIR /app

COPY ./ ./

RUN yarn