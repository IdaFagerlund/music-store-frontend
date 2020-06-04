# Multistage build

# Build react
FROM node:14.0.0-alpine3.10 as build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
RUN yarn install
COPY ./ .
RUN yarn build

# Setup nginx
# Serve the react build created above
# Copy over the nginx config to the docker image
FROM nginx:1.18.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]