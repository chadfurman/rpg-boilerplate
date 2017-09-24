-- Revert rpg:6_schema_account from pg

BEGIN;

drop schema account cascade;
drop schema account_private cascade;

COMMIT;
