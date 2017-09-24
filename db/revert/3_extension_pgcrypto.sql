-- Revert rpg:3_extension_pgcrypto from pg

BEGIN;

-- pgcrypto is installed in public schema dont drop

COMMIT;
