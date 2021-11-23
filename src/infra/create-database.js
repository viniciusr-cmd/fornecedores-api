const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname, 'database.db')
const db = new sqlite3.Database(caminhoArq);

// Endereço do cliente
const TABELA_ENDERECO_FORNECEDOR = `
    CREATE TABLE IF NOT EXISTS "ENDERECO_FORNECEDOR" (
        "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
        "ENDERECO" varchar,
        "NOME_DO_FORNECEDOR" varchar,
        "FRETE_POR_KM" varchar
    )
`;

const ADD_DADOS_FORNECEDOR = `INSERT INTO ENDERECO_FORNECEDOR 
        (ID, ENDERECO, NOME_DO_FORNECEDOR, FRETE_POR_KM)
        VALUES
        (1, '0000000000000000', 'JOSÉ LUIZ', '00.00'),
        (2, '0000000000000000', 'JOSÉ LUIZ', '01.00')
`

function criaTabelaEnderecoFornecedor() {
    db.run(TABELA_ENDERECO_FORNECEDOR, (e) => {
        if (e) {
            console.log('Erro ao criar a tabela ENDERECO_FORNECEDOR', e);
        }
    });
}

function insereTabelaEnderecoFornecedor() {
    db.run(ADD_DADOS_FORNECEDOR, (e) => {
        if (e) {
            console.log('Erro ao inserir os dados na tabela TABELA_FORNECEDOR');
        }
    });
}

db.serialize(() => {
    criaTabelaEnderecoFornecedor();
    insereTabelaEnderecoFornecedor();
})