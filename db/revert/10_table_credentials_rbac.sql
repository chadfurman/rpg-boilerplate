-- Revert rpg:10_table_credentials_rbac from pg

BEGIN;

grant all on table account_private.credentials to public;

COMMIT;
