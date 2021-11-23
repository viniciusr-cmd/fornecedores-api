class fornecedorDAO {
    constructor(fornecedordb) {
        this.fornecedordb = fornecedordb;
    }

    selectFornecedor() {
        return new Promise((resolve, reject) => {
            this.fornecedordb.all('SELECT * FROM ENDERECO_FORNECEDOR', (err, rows) => {
                if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "error": false,
                        "fornecedores": rows,
                        "count": rows.length
                    })
                }
            })
        }
        )
    }

    selectID(id) {
        return new promise((resolve, reject) => {
            this.fornecedordb.all(`SELECT id FROM ENDERECO_FORNECEDOR WHERE id = ${id}`, (err, rows) => {
                if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "error": false,
                        "id": rows,
                        "count": rows.length
                    })
                }
            })
        })
    }
}