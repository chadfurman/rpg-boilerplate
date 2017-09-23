-- Deploy evercast_local:jwt to pg
-- requires: schema_account
-- requires: extension_uuidOssp

BEGIN;

CREATE TYPE account.jwt AS ( role text, profile_id uuid );
comment on type account.jwt is 'JWT Type used to map authentication response to a JSON Web Token';

COMMIT;
