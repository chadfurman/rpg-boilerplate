-- Deploy evercast_local:create_account to pg

BEGIN;

DROP FUNCTION account.signup(text, text, text);

CREATE OR REPLACE FUNCTION account.create_account(display_name text, email text, password text) RETURNS account.profile
    LANGUAGE plpgsql STRICT SECURITY DEFINER
    AS $$
declare
  profile account.profile;
begin
  insert into account.profile (display_name) values
    (display_name)
    returning * into profile;

  insert into account_private.credentials (profile_id, email, password) values
    (profile.id, email, crypt(password, gen_salt('bf')));

  return profile;
end;
$$;

COMMENT ON FUNCTION account.create_account(display_name text, email text, password text) IS 'Registers a single user account with profile and credentials. Display name is limited to 80 chars.  Password will be hashed and stored.  Email will be checked against a basic regex.';

GRANT EXECUTE ON FUNCTION account.create_account(display_name text, email text, password text) TO evercast_anonymous;

COMMIT;
