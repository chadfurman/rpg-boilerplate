-- Revert rpg:table_credentials_rbac from pg

BEGIN;

grant all on table account_private.credentials to public;

COMMIT;
