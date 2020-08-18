# Teste front-end para Quero Educação

[Link do teste](https://github.com/quero-edu/front-end-test-quero)

## 1. Como executar o projeto

### 1.1 Client

Como este projeto foi construído com `create-react-app`, basta:

1. `yarn` para baixar as dependências.
2. `yarn start` para startar o projeto.
3. acesse `localhost:3000`.

### 1.2 Server

Como foi utilizado a [json-server](https://github.com/typicode/json-server) para criar uma fake REST API, basta:

1. `npm install -g json-server` baixar a dependência.
2. `yarn server` para startar a json-server.

---

## O que foi utilizado

### Framework/Bibliotéca

- Utilizei o framework [React](https://pt-br.reactjs.org/) juntamente com o CLI [create-react-app](https://create-react-app.dev/) para criar a base do projeto.

### Estilos

- [Sass](https://sass-lang.com/) como pré-processador estilos.

### Pacotes

- [Axios](https://github.com/axios/axios) como API para realizar as requisições.
- [Formik](https://formik.org/docs/overview) para facilitar a coleta dos dados fornecidos pelos formulários.
- [Lodash](https://lodash.com/docs/4.17.15) para facilitar a manipulação de Arrays.

---

## Melhorias futuras

- Adicionar server-side rendering (podemos utilizar o Next.js);
- Adicionar redux para centralizar o estado da aplicação;