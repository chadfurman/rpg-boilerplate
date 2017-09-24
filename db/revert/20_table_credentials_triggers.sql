-- Revert rpg:8_20_table_credentials_triggers from pg

BEGIN;

drop trigger credentials_updated_at on account_private.credentials;

COMMIT;
