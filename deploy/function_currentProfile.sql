-- Deploy evercast_local:function_currentProfile to pg
-- requires: table_profile

BEGIN;

CREATE OR REPLACE FUNCTION account.current_profile() RETURNS account.profile
AS $$
  SELECT * FROM account.profile where account.profile.id = current_setting('jwt.claims.profile_id')::uuid;
$$ LANGUAGE sql STABLE;

COMMENT ON FUNCTION account.current_profile() IS 'Returns the profile of the currently logged-in account.';

GRANT EXECUTE ON FUNCTION account.current_profile() TO evercast_anonymous, evercast_account;
GRANT EXECUTE ON FUNCTION account.current_profile() TO evercast_anonymous, evercast_account;

COMMIT;
