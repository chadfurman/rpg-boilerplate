-- Revert rpg_local:1_permissions_roles from pg

BEGIN;

DROP ROLE rpg_account;
DROP ROLE rpg_anonymous;
DROP ROLE rpg_app;

COMMIT;
