-- Revert evercast:function_logout from pg

BEGIN;

drop function account.logout();

COMMIT;
