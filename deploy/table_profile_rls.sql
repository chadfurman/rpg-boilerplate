-- Deploy evercast:table_profile_rls to pg
-- requires: table_profile

BEGIN;

alter table account.profile enable row level security;

create policy select_profile on account.profile for select using (true);
create policy update_profile on account.profile for update to evercast_account
  using (id = current_setting('jwt.claims.profile')::uuid);
create policy delete_profile on account.profile for delete to evercast_account
  using (id = current_setting('jwt.claims.profile')::uuid);

COMMIT;
