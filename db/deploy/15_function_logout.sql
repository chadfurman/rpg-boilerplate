-- Deploy rpg_local:15_function_logout to pg
-- requires: 6_schema_account

BEGIN;

create or replace function account.logout() returns boolean
language plpgsql as $$
begin
  return true;
end
$$;

COMMENT ON FUNCTION account.logout() IS 'PLACEHOLDER: Logout will eventually cause JWTs to expire.';

grant execute on function account.logout() to rpg_account;

COMMIT;
