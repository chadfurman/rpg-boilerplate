-- Deploy rpg_local:8_20_table_credentials_triggers to pg
-- requires 18_trigger_setUpdatedAt
-- requires 8_table_credentials

BEGIN;
CREATE TRIGGER credentials_updated_at BEFORE UPDATE ON account_private.credentials FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();
COMMIT;
