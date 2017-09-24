-- Deploy rpg_local:7_19_table_profile_triggers to pg
-- requires 18_trigger_setUpdatedAt
-- requires 7_table_profile

BEGIN;
CREATE TRIGGER profile_updated_at BEFORE UPDATE ON account.profile FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();
COMMIT;
