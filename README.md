# Agenda de Contatos
## Desafio Técnico da Muralis

## Descrição

Sistema web de agenda de clientes, proposto como desafio técnico da empresa Muralis.

## Índice
   * [Descrição](#descrição)
   * [Principais Tecnologias](#principais-tecnologias)
   * [Estrutura do Projeto](#estrutura-do-projeto)
   * [Dependências](#dependências)
   * [Configurações](#configurações)
   * [Instruções de uso](#instruções-de-uso)
   * [Vídeo Demonstração](#vídeo-demonstração)
   * [Requisitos](#vídeo-demonstração)
   * [Regras de Negócio](#vídeo-demonstração)
   * [Créditos](#créditos)

## Principais tecnologias

- Backend: Spring Boot e PostgreSQL
- Frontend: React e [Material UI](https://mui.com/)

## Estrutura do projeto
O projeto é dividido em três diretórios principais: backend/ frontend/ e database/.

    📁 backend/
    ├── 📁 src/
    │   └── 📁 main/
    │       └── 📁 java/com/comercios_sa/agenda/
    │           ├── 📁 config/
    │           ├── 📁 controller/
    │           ├── 📁 model/
    │           ├── 📁 repository/
    │           ├── 📁 service/
    |               └── 📁 validator/
    │           └── 🗒 AgendaApplication.java

    📁 frontend/
    ├── 📁 public/
    │   └── 🗒 index.html
    ├── 📁 src/
    │   ├── 📁 api/
    │   ├── 📁 componentes/
    │   ├── 📁 paginas/
    │       ├── 📁 GerenciarClientes/
    │       ├── 📁 CadastroCliente/
    │       ├── 📁 EditarCliente/
    │   ├── 🗒 App.js
    │   └── 🗒 index.js

    📁 database/
    └── 🗒 SCRIPT.sql 

## Dependências

### Backend
- Spring Boot
- Spring Boot Starter Validation
- Spring Boot DevTools Developer Tools
- Spring Web
- Spring Data JPA SQL
- PostgreSQL Driver SQL
- Lombok Developer Tools
- Apache Commons Validator

### Frontend 
- React
- React Router DOM
- [Material UI](https://mui.com/material-ui/getting-started/installation/)
- Material UI Icons

## Configurações
Para executar o projeto é necessário ter:
- Java 21
- Maven
- Node.js
- PostgreSQL

Para iniciar o Backend é necessário que 'application.properties' seja configurado corretamente. Esse arquivo está localizado em: 'backend/src/main/resources/application.properties'.

Exemplo:

```
spring.application.name=agenda_comercios_sa

spring.datasource.url=jdbc:postgresql://localhost:5432/agenda_comercios_sa
spring.datasource.username=postgres
spring.datasource.password=admin123

spring.jpa.hibernate.ddl-auto=update
```

Obs.: As tabelas do banco serão geradas automaticamente por causa de 'spring.jpa.hibernate.ddl-auto=update'. Essa propriedade é necessária para executar a API.

## Instruções de Uso

### Executando o Backend
- Criar o banco de dados manualmente no PostgreSQL
    Exemplo: `CREATE DATABASE agenda_comercios_sa;`

- Executar a aplicação Spring Boot

- Quando o servidor já tiver sido iniciado, executar os scripts SQL em `database/SCRIPT.sql` dentro do banco de dados criado

    ```
    ALTER TABLE cliente ALTER COLUMN cli_id SET DEFAULT nextval('cliente_seq');
    ALTER TABLE contato ALTER COLUMN ctt_id SET DEFAULT nextval('contato_seq');

    INSERT INTO cliente...
    INSERT INTO contato...
    ```

A partir disso, podem ser executados os scripts SQL em `database/SCRIPT.sql`. Dentro dele, existem comandos que:
- Permitem a inserção direta das entidades pelo PostgreSQL
- Irão popular o banco de dados

A partir disso, já é possível utilizar a API.

### Executando o Frontend
- Navegar até a pasta do frontend no terminal

    `cd frontend/`

- Instalar as dependências necessárias:

    `npm install`

- Executar o projeto usando:

    `npm start` ou `npm run start`

## Vídeo demonstração
https://github.com/user-attachments/assets/cc3b144e-902f-45b1-ae4c-7e5b13654c5f

## Requisitos
Abaixo segue a lista de requisitos implementados:
- [x] RF01: O sistema deve permitir o cadastro de clientes com os seguintes dados: Nome,
CPF, Data de Nascimento e Endereço;
- [x] RF02: O sistema deve permitir a edição dos dados de um cliente cadastrado;
- [x] RF03: O sistema deve permitir a exclusão de um cliente cadastrado;
- [x] RF04: O sistema deve permitir a listagem de todos os clientes cadastrados;
- [x] RF05: O sistema deve permitir a busca de um cliente pelo Nome ou CPF;
- [x] RF06: O sistema deve permitir o cadastro de contatos para um cliente, contendo os
seguintes dados: Tipo do Contato (Telefone, E-mail), Valor do Contato (número ou email) e Observação;
- [x] RF07: O sistema deve permitir a edição dos contatos de um cliente;
- [x] RF08: O sistema deve permitir a exclusão de um contato de um cliente;
- [x] RF09: O sistema deve permitir a listagem de todos os contatos de um cliente
específico.

## Regras de negócio
Abaixo segue a lista de regras de negócio aplicadas:
- [x] RN01: Os campos Nome e CPF são obrigatórios no cadastro do cliente;
- [x] RN02: Os campos Tipo do Contato e Valor do Contato são obrigatórios no cadastro do
contato;
- [x] RN03: O CPF informado deve ser único no sistema;
- [x] RN04: O Nome do cliente não pode estar vazio;
- [x] RN05: A Data de Nascimento deve ser válida;
- [x] RN06: Um cliente pode ter mais de um contato cadastrado;
- [x] RN07: Ao excluir um cliente, todos os seus contatos devem ser removidos do sistema;
- [x] RN08: O sistema deve validar os dados informados antes de permitir o cadastro ou
edição.

## Créditos
favicon.ico usado é de autoria de [flatart_icons - Flaticon](https://www.flaticon.com/br/autores/flatart-icons)