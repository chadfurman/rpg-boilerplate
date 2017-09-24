CREATE DATABASE localdb;
CREATE ROLE rpg_app with login superuser password 'localdev';
grant all privileges on database localdb to rpg_app;
