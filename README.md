![68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67](https://user-images.githubusercontent.com/50913322/87230209-c2d41600-c384-11ea-9339-71a8deacfccc.png)


<h1 align="center">:rocket: Desafio 06 do Nível 02 do Bootcamp GoStack 11.0 - Iniciando o Back-End :rocket:</h1>

A proposta deste desafio era testar os conhecimentos do módulo Iniciando o Back-End. Onde consistia em terminar a implementação do back-end da aplicação de gestão de transações,  realizado no [desafio anterior](https://github.com/letbueno/gostack-fundamentos-nodejs). para armazenar transações financeiras de entrada e saída e permitir o cadastro e a listagem dessas transações, além de permitir a criação de novos registros no banco de dados a partir do envio de um arquivo csv.

### Funcionalidades Implementadas :bookmark_tabs:
- Criar as tabelas de transação e categorias no banco de dados. :heavy_check_mark:
- Implementar as rotas e as funções de cadastrar, listar e deletar uma transação. :heavy_check_mark:
- Implementar a função de cadastrar uma nova função ao realizar uma transação (caso ela ainda não exista). :heavy_check_mark:
- Implementar a rota e a função de importar um arquivo CSV e cadastrar uma nova transação. :heavy_check_mark:


### Como Rodar a Aplicação :desktop_computer:


- No terminal, clone o projeto:

```
https://github.com/letbueno/gostack-desafio-iniciandoBackEnd/
```

- Instale as dependências:
```
yarn 
```

- Para executar a aplicação:
```
yarn dev:server
```

### Como testar as requisições 	:technologist:
Para testar as requisições você pode fazer uso de uma API Client, a que eu usei para realizar o projeto foi o [Insomnia](https://insomnia.rest).

- Para listar uma transação: **`GET /transactions`**
- Para cadastrar uma requisição: **`POST /transactions`**
- Para deletar uma requisição: **`DELETE /transactions/:id`**
- Para importar um arquivo CSV e realizar o cadastro da(s) transação(ões): **`POST /transactions/import`**

![insomnia](https://user-images.githubusercontent.com/50913322/87231773-64ad3000-c390-11ea-8b1e-6d73e5090bcf.jpg)

### Como Rodar os Testes? :desktop_computer:
Os testes foram desenvolvidos pela Rocketseat, para testar se as funcionalidades seguem os parâmetros indicados:
- Cadastrar uma nova transação. :heavy_check_mark:
- Criar uma categoria de transação (caso não exista ainda) ao criar uma nova transação. :heavy_check_mark:
- Não criar novamente uma categoria de transação que já exista. :heavy_check_mark:
- Não permitir uma transação de saída de saldo caso não há saldo suficiente. :heavy_check_mark:
- Deletar uma transação. :heavy_check_mark:
- Importar um arquivo CSV e realizar o cadastro da(s) transação(ões). :heavy_check_mark:

Para rodar o teste:
```
yarn test
```
### Dependências e Tecnologias :books: 
- [Node.js](https://nodejs.org/en/docs/)
- [Javascript](https://devdocs.io/javascript/)
- [Typescript](https://www.typescriptlang.org/docs/home.html)
- [Typeorm](https://typeorm.io/#/)
- [Cors](https://www.npmjs.com/package/cors)
- [Multer](https://www.npmjs.com/package/multer)

### Participante: 
|Name|E-mail|Course|
| -------- | -------- | -------- |
|Leticia Bueno Martins|leticia.bueno.martins@gmail.com|Bootcamp GoStack 11.0|
