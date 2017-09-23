-- Deploy rpg_local:table_profile to pg
-- requires: schema_account

BEGIN;

CREATE TABLE account.profile (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL PRIMARY KEY,
    display_name text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    image text,
    CONSTRAINT name_length CHECK (char_length(display_name) < 80),
    CONSTRAINT profile_image_check CHECK (char_length(image) < 2048)
);

COMMENT ON TABLE account.profile IS 'Account profiles contain display information for accounts.  Every account has one profile.  Profiles serve as a central reference point for accounts across datatypes.';
COMMENT ON COLUMN account.profile.display_name IS 'The public name of the user of the account.  This will show up on the site.';

COMMIT;
