-- Revert evercast_local:trigger_setUpdatedAt from pg

BEGIN;

DROP FUNCTION public.set_updated_at() CASCADE;

COMMIT;
