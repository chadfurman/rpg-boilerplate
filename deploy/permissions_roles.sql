-- Deploy evercast_local:permissions_roles to pg

BEGIN;

-- CREATE EXTENSION IF NOT EXISTS plpgsql;

DO
$body$
BEGIN
	IF NOT EXISTS (
		SELECT                       -- SELECT list can stay empty for this
		FROM   pg_catalog.pg_roles
		WHERE  rolname = 'evercast_account'
	) THEN 
		CREATE ROLE evercast_account WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB NOLOGIN NOREPLICATION NOBYPASSRLS;
		COMMENT ON ROLE evercast_account IS 'Accounts represent authenticated Evercast users.';
	END IF;

	IF NOT EXISTS (
		SELECT                       -- SELECT list can stay empty for this
		FROM   pg_catalog.pg_roles
		WHERE  rolname = 'evercast_anonymous'
	) THEN 
		CREATE ROLE evercast_anonymous WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB NOLOGIN NOREPLICATION NOBYPASSRLS;
		COMMENT ON ROLE evercast_anonymous IS 'A non-authenticated user of Evercast.';
	END IF;

	IF NOT EXISTS (
		SELECT                       -- SELECT list can stay empty for this
		FROM   pg_catalog.pg_roles
		WHERE  rolname = 'evercast_app'
	) THEN 
		CREATE ROLE evercast_app WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB NOLOGIN NOREPLICATION NOBYPASSRLS;
		GRANT evercast_anonymous to evercast_app;
		GRANT evercast_account to evercast_app;

		COMMENT ON ROLE evercast_app IS 'The low-privilege application role.';
	END IF;
END
$body$;


COMMIT;

