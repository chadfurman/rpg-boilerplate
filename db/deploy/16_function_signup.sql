-- Deploy rpg_local:16_function_signup to pg
-- requires: 8_table_credentials
-- requires: 3_extension_pgcrypto

BEGIN;

CREATE OR REPLACE FUNCTION account.signup(display_name text, email text, password text) RETURNS account.profile
    LANGUAGE plpgsql STRICT SECURITY DEFINER
    AS $$
declare
  profile account.profile;
begin
  insert into account.profile (display_name) values
    (display_name)
    returning * into profile;

  insert into account_private.credentials (profile_id, email, password) values
    (profile.id, email, public.crypt(password, public.gen_salt('bf')));

  return profile;
end;
$$;

COMMENT ON FUNCTION account.signup(display_name text, email text, password text) IS 'Registers a single user account with profile and credentials. Display name is limited to 80 chars.  Password will be hashed and stored.  Email will be checked against a basic regex.';
GRANT EXECUTE ON FUNCTION account.signup(display_name text, email text, password text) TO rpg_anonymous;

COMMIT;
