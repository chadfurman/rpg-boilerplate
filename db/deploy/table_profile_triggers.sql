-- Deploy rpg_local:table_profile_triggers to pg
-- requires trigger_setUpdatedAt
-- requires table_profile

BEGIN;
CREATE TRIGGER profile_updated_at BEFORE UPDATE ON account.profile FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();
COMMIT;
