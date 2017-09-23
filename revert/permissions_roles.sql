-- Revert evercast_local:permissions_roles from pg

BEGIN;

DROP ROLE evercast_account;
DROP ROLE evercast_anonymous;
DROP ROLE evercast_app;

COMMIT;
