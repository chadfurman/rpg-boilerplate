-- Deploy evercast:table_profile_rbac to pg
-- requires: table_profile

BEGIN;

REVOKE ALL ON TABLE account.profile FROM PUBLIC;
GRANT SELECT ON TABLE account.profile TO evercast_anonymous, evercast_account;
GRANT UPDATE, DELETE ON TABLE account.profile TO evercast_account;

COMMIT;
