CREATE USER rpg_app with login superuser password 'localdev';
CREATE DATABASE localdb;
grant all privileges on database localdb to rpg_app;
