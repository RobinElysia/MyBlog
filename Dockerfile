FROM node:20-bookworm-slim AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install

COPY docs ./docs

RUN npm run docs:build

FROM nginx:1.27-alpine

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/docs/.vuepress/dist /usr/share/nginx/html

EXPOSE 80 443
