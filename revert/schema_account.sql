-- Revert evercast:schema_account from pg

BEGIN;

drop schema account cascade;
drop schema account_private cascade;

COMMIT;
