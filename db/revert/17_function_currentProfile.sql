-- Revert rpg:17_function_currentProfile from pg

BEGIN;

drop function account.current_profile();

COMMIT;
