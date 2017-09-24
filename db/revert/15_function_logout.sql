-- Revert rpg:15_function_logout from pg

BEGIN;

drop function account.logout();

COMMIT;
