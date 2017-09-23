-- Revert evercast_local:profile from pg

BEGIN;

drop table account.profile cascade;

COMMIT;
