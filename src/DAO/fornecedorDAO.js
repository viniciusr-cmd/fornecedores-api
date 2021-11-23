class FornecedorDAO {

  static selectFornecedor(fornecedordb) {
    return new Promise((resolve, reject) => {
      fornecedordb.all('SELECT * FROM ENDERECO_FORNECEDOR', (err, rows) => {
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

  static selectID(id, fornecedordb) {
    return new promise((resolve, reject) => {
      fornecedordb.all(`SELECT id FROM ENDERECO_FORNECEDOR WHERE id = ${id}`, (err, rows) => {
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

  static addFornecedor(body, fornecedordb) {
    return new Promise((resolve, reject) => {
      fornecedordb.run(`INSERT INTO ENDERECO_FORNECEDOR (ENDERECO, NOME_DO_FORNECEDOR, FRETE_POR_KM) VALUES (?, ?, ?)`, [body.endereco, body.nome_do_fornecedor, body.frete_por_km], (err) => {
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

  static deleteFornecedor(id, fornecedordb) {
    return new Promise((resolve, reject) => {
      fornecedordb.all(`DELETE FROM ENDERECO_FORNECEDOR WHERE id = ${id}`, (err) => {
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

  static updateFornecedor(id, body, fornecedordb) {
    return new Promise((resolve, reject) => {
      fornecedordb.run(`UPDATE ENDERECO_FORNECEDOR SET (ENDERECO, NOME_DO_FORNECEDOR, FRETE_POR_KM) = (?, ?, ?) WHERE id = ${id}`, [body.endereco, body.nome_do_fornecedor, body.frete_por_km], (err) => {
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
}

module.exports = FornecedorDAO