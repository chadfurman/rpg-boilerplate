-- Revert rpg_local:profile from pg

BEGIN;

drop table account.profile cascade;

COMMIT;
