-- Deploy rpg_local:2_schema_util to pg
-- requires: 1_permissions_roles
-- requires: 5_permissions_revokeExecute

BEGIN;

CREATE SCHEMA util;
COMMENT ON SCHEMA util IS 'The public data and routines associated with db utilities';
GRANT USAGE ON SCHEMA util TO rpg_anonymous, rpg_account, rpg_app;

COMMIT;
