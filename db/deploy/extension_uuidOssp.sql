-- Deploy rpg_local:uuid to pg

BEGIN;

create extension if not exists "uuid-ossp" schema public;

COMMIT;
