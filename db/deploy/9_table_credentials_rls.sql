-- Deploy rpg_local:9_table_credentials_rls to pg
-- requires 8_table_credentials

BEGIN;
ALTER TABLE account_private.credentials ENABLE ROW LEVEL SECURITY;
COMMIT;
