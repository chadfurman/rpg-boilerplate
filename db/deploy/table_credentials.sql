-- Deploy rpg_local:table_credentials to pg
-- requires table_profile

BEGIN;

CREATE TABLE account_private.credentials (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL PRIMARY KEY,
    profile_id uuid NOT NULL REFERENCES account.profile (id),
    password text NOT NULL,
    email text UNIQUE NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    CONSTRAINT credentials_email_check CHECK ((email ~* '^.+@.+\..+$'::text))
);


COMMENT ON TABLE account_private.credentials IS 'An account may optionally have a set of credentials.  If an account does not have credentials, it is a guest account and cannot be accessed once the initial JWT expires.';
COMMENT ON COLUMN account_private.credentials.profile_id IS 'Every account has a public profile, and so the profile_id is used to identify the account.  One set of credentials per profile.';
COMMENT ON COLUMN account_private.credentials.password IS 'Secure hash of password.  Used inside authentication procedure.';
COMMENT ON COLUMN account_private.credentials.email IS 'Emails must be unique and valid';

COMMIT;
