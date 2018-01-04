FROM node:8.6 as node
WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install
COPY ./ /app/
ARG env=prod
RUN yarn build

FROM nginx:alpine
COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
