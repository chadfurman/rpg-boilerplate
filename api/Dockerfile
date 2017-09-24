FROM node:8.5.0-alpine

# Update OS
RUN apk --no-cache add ca-certificates wget && update-ca-certificates

# Install yarn
RUN mkdir -p /opt/yarn && cd /opt/yarn && wget https://yarnpkg.com/latest.tar.gz && tar zxf latest.tar.gz
ENV PATH "$PATH:/opt/yarn/dist/bin"

EXPOSE 3000
CMD ["node", "dist/index.js"]

# Create the working dir
RUN mkdir -p /opt/app && mkdir /cache
WORKDIR /opt/app

# Do not use cache when we change node dependencies in package.json
ADD package.json yarn.lock /cache/

# Copy cache contents (if any) from local machine
ADD .yarn-cache.tgz /

# Install packages + Prepare cache file
RUN cd /cache \
  && yarn config set cache-folder /usr/local/share/.cache/yarn \
  && yarn \
  && cd /opt/app && ln -s /cache/node_modules node_modules \
  && tar czf /.yarn-cache.tgz /usr/local/share/.cache/yarn

COPY . /opt/app

RUN yarn build
