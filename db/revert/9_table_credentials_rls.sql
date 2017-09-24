-- Revert rpg:9_table_credentials_rls from pg

BEGIN;

alter table account_private.credentials disable row level security;

COMMIT;
