-- Deploy rpg_local:10_table_credentials_rbac to pg
-- requires 8_table_credentials

BEGIN;
REVOKE ALL ON TABLE account_private.credentials FROM PUBLIC;
COMMIT;
