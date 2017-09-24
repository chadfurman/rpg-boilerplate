-- Deploy rpg_local:permissions_roles to pg

BEGIN;

-- CREATE EXTENSION IF NOT EXISTS plpgsql;

DO
$body$
BEGIN
	IF NOT EXISTS (
		SELECT                       -- SELECT list can stay empty for this
		FROM   pg_catalog.pg_roles
		WHERE  rolname = 'rpg_account'
	) THEN 
		CREATE ROLE rpg_account WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB NOLOGIN NOREPLICATION NOBYPASSRLS;
		COMMENT ON ROLE rpg_account IS 'Accounts represent authenticated RPG users.';
	END IF;

	IF NOT EXISTS (
		SELECT                       -- SELECT list can stay empty for this
		FROM   pg_catalog.pg_roles
		WHERE  rolname = 'rpg_anonymous'
	) THEN 
		CREATE ROLE rpg_anonymous WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB NOLOGIN NOREPLICATION NOBYPASSRLS;
		COMMENT ON ROLE rpg_anonymous IS 'A non-authenticated user of RPG.';
	END IF;

	IF NOT EXISTS (
		SELECT                       -- SELECT list can stay empty for this
		FROM   pg_catalog.pg_roles
		WHERE  rolname = 'rpg_app'
	) THEN 
		CREATE ROLE rpg_app WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB NOLOGIN NOREPLICATION NOBYPASSRLS;
		GRANT rpg_anonymous to rpg_app;
		GRANT rpg_account to rpg_app;

		COMMENT ON ROLE rpg_app IS 'The low-privilege application role.';
	END IF;
END
$body$;


COMMIT;

