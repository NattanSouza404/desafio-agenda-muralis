CREATE DATABASE agenda_comercios_sa;

-- OPCIONAL
-- Necessário para inserções diretas no banco PostgreSQL
-- Com essas alterações, não é necessário informar id para criar um novo registro 
ALTER TABLE cliente ALTER COLUMN cli_id SET DEFAULT nextval('cliente_seq');
ALTER TABLE contato ALTER COLUMN ctt_id SET DEFAULT nextval('contato_seq');