# Stage 1: Build
# Label our stage as `builder`
FROM node:10 as builder

RUN apt-get update -y && apt-get install -y wget libxss1 libindicator7 fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 libgtk-3-0 libnspr4 libnss3 libx11-xcb1 libxtst6 lsb-release xdg-utils

# Chrome repository
RUN cd /tmp/
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i ./google-chrome*.deb
RUN rm ./google-chrome*.deb
RUN apt-get install -f

# Copy package.json
COPY package.json ./

# Set dirs
ENV APP_DIR /restaurants

# Install utilities
RUN apt-get update -qq \
    && apt-get install -y apt-utils \
    && apt-get install -y build-essential

# Clean up
RUN npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i \
    && mkdir $APP_DIR \
    && cp -R ./node_modules .$APP_DIR

# Create workdir
WORKDIR $APP_DIR

# Copy root to Docker container
COPY . .

# Run angular tests
RUN $(npm bin)/ng test --karmaConfig=karma-headless.conf.js --progress=true --watch=false --reporters

# Build the angular root in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --prod --aot

# Stage 2: Setup
FROM nginx:1.13.9-alpine

# Set dirs
ENV APP_DIR /restaurants
ENV NGINX_DIR usr/share/nginx
ENV NGINX_CONF_DIR nginx/default.conf

# Copy our default nginx config
COPY $NGINX_CONF_DIR /etc/nginx/conf.d/default.conf

# Remove default nginx website
RUN rm -rf /$NGINX_DIR/html/*

# From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder $APP_DIR/dist/restaurants /$NGINX_DIR/html

# Copy `entrypoint.sh` script to default nginx public folder
COPY --from=builder $APP_DIR/entrypoint.sh /$NGINX_DIR/entrypoint.sh

# Remove root dir
RUN rm -rf $APP_DIR

# Run without set port
# CMD ["nginx", "-g", "daemon off;"]

# Search port on Heroku by `entrypoint.sh` and run server
RUN chmod +x /$NGINX_DIR/entrypoint.sh
CMD ["/bin/sh", "-c", "/$NGINX_DIR/entrypoint.sh"]
