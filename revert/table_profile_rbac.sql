-- Revert rpg:table_profile_rbac from pg

BEGIN;

grant all on account.profile to public;

COMMIT;
