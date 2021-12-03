# Desenvolvimento de uma API-Rest em NodeJs utilizando express.

## Descrição:
Aplicação <b>BACK-END</b> que gerencia e automatiza uma rotina de fornecedores de uma loja de informática. Para isso foi utilizado o banco de dados relacional SQLite, com o padrão do tipo REST e como organizador de conceitos, o MVC.

## Ferramentas utilizadas:
Para o desenvolvimento, foi utilizado <b>*JavaScript*</b> com <b>*NodeJS*</b>, e <b>*Express*</b> como Framework, além do banco de dados relacional <b>*SQLite*</b> e hospedagem pela <b>*Heroku*</b>.

## Dependencias necessárias:
```js
"dependencies": {
    "chalk": "^4.1.2",
    "consign": "^0.1.6",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "sqlite3": "^5.0.2"
  }
```
As dependencias podem ser encontradas <a href = 'https://github.com/viniciusr-cmd/fornecedores-api/blob/main/package.json'><b>AQUI</b></a> do qual o trecho acima foi extraído, para instalar basta rodar o comando abaixo selecionando e copiando o mesmo com as teclas *Ctrl + C* e em seguida colar no terminal com as telas *Ctrl + Shift + V*, o comando abaixo já irá fazer o clone deste repositório e instalar as dependencias necessárias.

```
git clone https://github.com/viniciusr-cmd/fornecedores-api.git && cd fornecedores-api && npm install
```
## Dependencias de desenvolvimento:
```json
"devDependencies": {
    "nodemon": "^2.0.15"
  }
```
Em outra parte do <a href = 'https://github.com/viniciusr-cmd/fornecedores-api/blob/main/package.json'><b>Arquivo de configuração</b></a> é possível encontrar o código acima que foi extraído do mesmo, *essas são as dependencias necessárias para o ambiente de desenvolvimento da aplicação*, caso deseje instalar utilize os comandos abaixo em seu terminal logo após o comando das dependencias obrigatórias.

```
npm install --save-dev nodemon
```
## Inicialização da aplicação via terminal:
Para inicio da aplicação basta abrir o terminal na pasta do projeto ou executar o código abaixo.

```
npm start
```

## Observação importante:

A versão <b>NODE.JS</b> utilizada para desenvolvimento é a *16.x LTS*, logo é necessário intalação de versão igual ou superior para a perfeita execução da mesma.

## Rotas da API:

Temos a rota raiz <b>"/fornecedores"</b> onde podemos utilizar todos os métodos CRUD, tais como <b>*Create, Read, Update, Delete*</b>.
<br>
<br>

### Ver todos os fornecedores:

Utilizar o método HTTP <b>GET</b> no caminho <b>"URL" + /fornecedores</b>
<br>
<br>

### Buscar fornecedores por id:

Utilizar o método HTTP <b>GET</b> no caminho <b>"URL" + /fornecedores/id</b>
<br>
<br>

### Adicionar fornecedores:
Utilizar o método HTTP <b>POST</b> no caminho <b>"URL" + /fornecedores</b> com todos os dados necessários para o seu banco de dados. Segue abaixo o exemplo para o corpo da requisição.

```json
    {
        "ENDERECO": "ENDEREÇO LEGAL",
        "NOME_DO_FORNECEDOR": "NOME MANEIRO E LEGAL D+",
        "FRETE_POR_KM": "01.00"
    }
```
<br>
<br>

### Modificar um fornecedor já existente:
Utilizar o método HTTP <b>PATCH</b> no caminho <b>"URL" + /fornecedores/:id</b> passando os valores que deseja alterar especificando seus devidos campos. Para isso basta respeitar a sintaxe json novamente, passada abaixo no corpo da requisição.
```json
    {
        "ENDERECO": "ENDEREÇO MAIS LEGAL AINDA",
        "NOME_DO_FORNECEDOR": "NOME MAIS MANEIRO DE BOM AINDA",
        "FRETE_POR_KM": "02.00"
    }
```
<br>
<br>

### Deletar um fornecedor:
Utilizar o método HTTP <b>DELETE</b> no caminho <b>"URL" + /fornecedores/:id</b>.

<br>
<br>

![Exemplo de GET no POSTMAN](https://docs.microsoft.com/pt-br/graph/images/postman-screenshot.png "GET no POSTMAN")

### +OBS 2: Caso você apague o arquivo do banco de dados sem querer, rode o comando abaixo para criar outro novamente, mas atenção, *esse novo banco virá vazio*, apenas com a linha 1 contendo o exemplo dos tipos de dados aceitos nele.

```node
node ./src/infra/create-database.js
```