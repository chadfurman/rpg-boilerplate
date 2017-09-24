-- Deploy rpg_local:18_trigger_setUpdatedAt to pg

BEGIN;

CREATE FUNCTION public.set_updated_at() RETURNS trigger
AS $$
BEGIN
  new.updated_at := current_timestamp;
  return new;
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION public.set_updated_at() IS 'A helper function for setting the updated time via triggers';


COMMIT;
