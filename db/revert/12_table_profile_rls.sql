-- Revert rpg:7_12_table_profile_rls from pg

BEGIN;

alter table account.profile disable row level security;
drop policy select_profile on account.profile;
drop policy update_profile on account.profile;
drop policy delete_profile on account.profile;

COMMIT;
