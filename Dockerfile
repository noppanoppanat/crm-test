FROM node:14 AS builder
WORKDIR /opt/web

COPY package.json yarn.lock ./
RUN yarn install --ignore-engines

COPY ./ ./
RUN yarn build

FROM nginx:1.17-alpine

COPY --from=builder /opt/web/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
