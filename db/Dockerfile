FROM postgres:9.6
ADD dbinit.sql /docker-entrypoint-initdb.d/
RUN chmod 0755 /docker-entrypoint-initdb.d/dbinit.sql
EXPOSE 5432
