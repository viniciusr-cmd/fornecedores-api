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
            "fornecedores": rows,
            "count": rows.length,
            "error": false
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
            "id": rows,
            "count": rows.length,
            "error": false
          })
        }
      })
    })
  }

  addFornecedor(body) {
    return new Promise((resolve, reject) => {
      this.fornecedordb.run(`INSERT INTO ENDERECO_FORNECEDOR (ENDERECO, NOME_DO_FORNECEDOR, FRETE_POR_KM) VALUES (?, ?, ?)`, [body.endereco, body.nome_do_fornecedor, body.frete_por_km], (err) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "fornecedor": body,
            "error": false
          })
        }
      })
    })
  } 

  deleteFornecedor(id) {
    return new Promise((resolve, reject) => {
      this.fornecedordb.all(`DELETE FROM ENDERECO_FORNECEDOR WHERE id = ${id}`, (err) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "fornecedor": id,
            "count": id.length,
            "error": false
          })
        }
      })
    })
  }

  updateFornecedor(id, body) {
    return new Promise((resolve, reject) => {
      this.fornecedordb.run(`UPDATE ENDERECO_FORNECEDOR SET (ENDERECO, NOME_DO_FORNECEDOR, FRETE_POR_KM) = (?, ?, ?) WHERE id = ${id}`, [body.endereco, body.nome_do_fornecedor, body.frete_por_km], (err) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true}))
        } else {
          resolve({
            "fornecedor": id,
            "count": id.length,
            "error": false
          })
        }
      })
    })
  }
}

module.exports = fornecedorDAO