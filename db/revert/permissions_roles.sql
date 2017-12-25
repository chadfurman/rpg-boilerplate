-- Revert rpg_local:permissions_roles from pg

BEGIN;

DROP ROLE rpg_account;
DROP ROLE rpg_anonymous;
DROP ROLE rpg_app;

COMMIT;
