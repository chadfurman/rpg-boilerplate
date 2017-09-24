-- Revert rpg:schema_util from pg

BEGIN;

drop schema util cascade;

COMMIT;
