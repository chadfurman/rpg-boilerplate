-- Revert rpg:4_extension_uuidOssp from pg

BEGIN;

-- uuid-ossp is installed in public schema, no need to drop

COMMIT;
