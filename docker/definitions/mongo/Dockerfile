FROM mongo:3.0.7

ENV TZ=America/New_York
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY mongod.conf /etc/mongod.conf

CMD ["mongod",  "-f", "/etc/mongod.conf"]
