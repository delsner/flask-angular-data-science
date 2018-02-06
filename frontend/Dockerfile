FROM node:8

ARG http_proxy
ARG https_proxy

ENV http_proxy ${http_proxy}
ENV https_proxy ${https_proxy}

RUN npm config set proxy ${http_proxy} \
  && npm config set https-proxy ${https_proxy} \
  && yarn config set proxy ${http_proxy} \
  && yarn config set https-proxy ${https_proxy}

# set up angular cli
RUN yarn global add @angular/cli@1.2.6

WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install --pure-lockfile
COPY . /app

# create watch files
CMD ng serve --host 0.0.0.0 --disable-host-check --proxy-config proxy.conf.dev.json
EXPOSE 4200
