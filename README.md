<h1 align="center">
    <a href='https://br.freepik.com/vetores/logotipo'>
        <img alt="Logo" src=".github/logo.jpg" width="200px" />
    </a>
</h1>

<h3 align="center">
  Oficina 2.0
</h3>

<p align="center">
Documentação do projeto Oficina 2.0 realizado no teste técnico de avaliação da codificar.
</p>

<p align="center">
  <a href="">
    <img alt="Language" src="https://img.shields.io/badge/language%20-JavaScript%20-blue">
  </a>

  <a href="">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Pedro%20Barbosa-gree">
  </a>

  <a href="">
    <img alt="Made by" src="https://img.shields.io/badge/license%20by-MIT%20-yellow">
  </a>

</p>

<p align="center">
  <a href="#-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 👨🏻‍💻 About the project

- <p style="font-weight: bold;">
  Frontend criado para consumir os recursos da API Rest do projeto Oficina 2.0. Quase todas as funcionalidades foram aplicadas, com exceção da barra de pesquisa com sugestões automáticas e filtragem.
  O projeto pode ser utilizado com ou sem docker, siga as instruções abaixo para saber mais.
</p>

# Tarefas

- [x] Os campos de cadastro serão: id, cliente, data e hora do orçamento, vendedor, descrição, valor orçado. A tela deve permitir também a edição.
  - [x] CRUD de cliente
  - [x] CRUD de vendedor
  - [x] CRUD de orçamento

- [] Pesquisas
  - [x] A tela deverá conter uma tabela com os dados já filtrados e listados por ordem decrescente da data de cadastro do orçamento
  - [] Criar uma tela de pesquisa de orçamento
  - [] A tela de pesquisa deverá ter filtro por intervalo de datas, nome do cliente e nome do vendedor.


Para ver a  **api** do projeto, clique aqui: [Oficina Rest API](https://github.com/pedrobbarbosa/Oficina2.0)</br>

## 🚀 Tecnologias

Tecnologias que eu utilizei para desenvolver esse cliente web.

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)

## 💻 Começando

### Requisitos

- Ter essa aplicação [API](https://github.com/pedrobbarbosa/Oficina2.0) executando

**Clone o projeto e acesse o arquivo**

```bash
$ git clone https://github.com/pedrobbarbosa/oficina_frontend.git && cd oficina_frontend
```

**Siga os passos abaixo para executar a aplicação com docker**

```bash
# Va até a raiz do projeto
$ docker build -t oficina_frontend .

# Be sure the file 'src/services/api.ts' have the IP to your API
$ docker run -p 3000:3000 oficina_frontend

# Acesse a url
$ http://localhost:3000/
```

**Caso não consiga/queira utilizar o docker**

```bash
# Va até a raiz do projeto
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API
$ yarn run

# Acesse a url
$ http://localhost:3000/
```

Made with 💜 &nbsp;by Pedro Barbosa
