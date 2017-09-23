-- Deploy rpg_local:table_credentials_triggers to pg
-- requires trigger_setUpdatedAt
-- requires table_credentials

BEGIN;
CREATE TRIGGER credentials_updated_at BEFORE UPDATE ON account_private.credentials FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();
COMMIT;
