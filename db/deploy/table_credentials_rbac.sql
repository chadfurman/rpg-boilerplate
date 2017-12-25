-- Deploy rpg_local:table_credentials_rbac to pg
-- requires table_credentials

BEGIN;
REVOKE ALL ON TABLE account_private.credentials FROM PUBLIC;
COMMIT;
