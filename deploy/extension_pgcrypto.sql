-- Deploy evercast:extension_pgcrypto to pg

BEGIN;

create extension if not exists pgcrypto schema public;

COMMIT;
