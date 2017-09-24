-- Deploy rpg_local:schema_util to pg
-- requires: permissions_roles
-- requires: permissions_revokeExecute

BEGIN;

CREATE SCHEMA util;
COMMENT ON SCHEMA util IS 'The public data and routines associated with db utilities';
GRANT USAGE ON SCHEMA util TO rpg_anonymous, rpg_account, rpg_app;

COMMIT;
