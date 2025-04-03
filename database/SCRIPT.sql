CREATE DATABASE agenda_comercios_sa;

ALTER TABLE cliente ALTER COLUMN cli_id SET DEFAULT nextval('cliente_seq');
ALTER TABLE contato ALTER COLUMN ctt_id SET DEFAULT nextval('contato_seq');

INSERT INTO cliente(cli_cpf, cli_data_nascimento, cli_endereco, cli_nome)
    VALUES ('111.111.111-11', '1985-07-12', 'Rua das Flores, 123 - São Paulo, SP', 'João Silva');

INSERT INTO contato(ctt_observacao, ctt_tipo, ctt_valor, ctt_cli_id)
    VALUES ('Contato pessoal', 'TELEFONE', '11111111', currval('cliente_seq'));

INSERT INTO cliente(cli_cpf, cli_data_nascimento, cli_endereco, cli_nome)
    VALUES ('222.222.222-22', '1990-05-23', 'Avenida Brasil, 456 - Rio de Janeiro, RJ', 'Maria Oliveira');

INSERT INTO contato(ctt_observacao, ctt_tipo, ctt_valor, ctt_cli_id)
    VALUES ('Contato pessoal', 'EMAIL', 'nome@dominio.com', currval('cliente_seq'));

INSERT INTO cliente(cli_cpf, cli_data_nascimento, cli_endereco, cli_nome)
    VALUES ('333.333.333-33', '1978-11-02', 'Rua Amazonas, 789 - Belo Horizonte, MG', 'Carlos Santos');

INSERT INTO contato(ctt_observacao, ctt_tipo, ctt_valor, ctt_cli_id)
    VALUES ('Contato pessoal', 'EMAIL', 'nome@dominio.com', currval('cliente_seq'));

INSERT INTO cliente(cli_cpf, cli_data_nascimento, cli_endereco, cli_nome)
    VALUES ('444.444.444-44', '2000-03-15', 'Rua XV de Novembro, 321 - Curitiba, PR', 'Ana Souza');

INSERT INTO contato(ctt_observacao, ctt_tipo, ctt_valor, ctt_cli_id)
    VALUES ('Contato pessoal', 'TELEFONE', '11111111', currval('cliente_seq'));

INSERT INTO cliente(cli_cpf, cli_data_nascimento, cli_endereco, cli_nome)
    VALUES ('555.555.555-55', '1995-12-29', 'Avenida Paulista, 654 - São Paulo, SP', 'Pedro Costa');

INSERT INTO contato(ctt_observacao, ctt_tipo, ctt_valor, ctt_cli_id)
    VALUES ('Contato pessoal', 'EMAIL', 'nome@dominio.com', currval('cliente_seq'));
