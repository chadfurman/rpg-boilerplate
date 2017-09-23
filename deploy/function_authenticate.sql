-- Deploy rpg_local:function_authenticate to pg
-- requires: type_jwt
-- requires: table_credentials
-- requires: extension_pgcrypto

BEGIN;


-- authenticate(text,text)
CREATE or replace FUNCTION account.authenticate(email text, password text) RETURNS account.jwt
    LANGUAGE plpgsql STRICT SECURITY DEFINER
    AS $$
declare
  credentials account_private.credentials;
begin
  select c.* into credentials
  from account_private.credentials as c
  where c.email = $1;

  if not found or credentials.password <> public.crypt(password, credentials.password) then
    return null;
  end if;

  return ('rpg_account', credentials.profile_id)::account.jwt;
end;
$$;
COMMENT ON FUNCTION account.authenticate(email text, password text) IS 'The authentication method takes two paramenters -- an email address and a password -- and returns a JWT if successful or otherwise returns an error';
REVOKE ALL ON FUNCTION account.authenticate(email text, password text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION account.authenticate(email text, password text) TO rpg_anonymous;

COMMIT;
