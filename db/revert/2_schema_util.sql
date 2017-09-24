-- Revert rpg:2_schema_util from pg

BEGIN;

drop schema util cascade;

COMMIT;
