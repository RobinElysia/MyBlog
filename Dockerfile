FROM node:20-bookworm-slim AS build

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY docs ./docs

RUN pnpm docs:build

FROM nginx:1.27-alpine

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/docs/.vuepress/dist /usr/share/nginx/html

EXPOSE 80 443
