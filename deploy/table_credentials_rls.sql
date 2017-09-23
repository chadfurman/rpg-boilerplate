-- Deploy rpg_local:table_credentials_rls to pg
-- requires table_credentials

BEGIN;
ALTER TABLE account_private.credentials ENABLE ROW LEVEL SECURITY;
COMMIT;
