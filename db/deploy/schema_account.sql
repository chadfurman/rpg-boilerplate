-- Deploy rpg_local:schema_account to pg
-- requires: permissions_roles
-- requires: permissions_revokeExecute

BEGIN;

CREATE SCHEMA account;
COMMENT ON SCHEMA account IS 'The public data and routines associated with user accounts';
GRANT USAGE ON SCHEMA account TO rpg_anonymous, rpg_account, rpg_app;

CREATE SCHEMA account_private;
COMMENT ON SCHEMA account_private IS 'The private data and routines associated with user accounts';
GRANT USAGE ON SCHEMA account_private TO rpg_app;

COMMIT;
