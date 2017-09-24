-- Revert rpg:table_profile_triggers from pg

BEGIN;

drop trigger profile_updated_at on account.profile;

COMMIT;
