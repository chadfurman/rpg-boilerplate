-- Revert rpg:8_table_credentials from pg

BEGIN;

drop table account_private.credentials cascade;

COMMIT;
