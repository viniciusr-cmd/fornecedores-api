class FornecedorDAO {

  selectFornecedor(fornecedordb) {
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

  selectNomeFornecedor(nome, fornecedordb) {
    return new Promise((resolve, reject) => {
      fornecedordb.all('SELECT * FROM ENDERECO_FORNECEDOR WHERE NOME_DO_FORNECEDOR = ?', nome, (err, rows) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "fornecedor": rows,
            "count": rows.length,
            "error": false
          })
        }
      })
    }
    )
  }

  selectID(id, fornecedordb) {
    return new Promise((resolve, reject) => {
      fornecedordb.all(`SELECT * FROM ENDERECO_FORNECEDOR WHERE id = ?`, id, (err, rows) => {
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

  addFornecedor(body, fornecedordb) {
    return new Promise((resolve, reject) => {
      fornecedordb.run(`INSERT INTO ENDERECO_FORNECEDOR (ENDERECO, NOME_DO_FORNECEDOR, FRETE_POR_KM) VALUES (?, ?, ?)`, [body.ENDERECO, body.NOME_DO_FORNECEDOR, body.FRETE_POR_KM], (err) => {
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

  deleteFornecedor(id, fornecedordb) {
    return new Promise((resolve, reject) => {
      fornecedordb.all(`DELETE FROM ENDERECO_FORNECEDOR WHERE id = ?`, id, (err) => {
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

  updateFornecedor(id, body, fornecedordb) {
    return new Promise((resolve, reject) => {
      fornecedordb.run(`UPDATE ENDERECO_FORNECEDOR SET (ENDERECO, NOME_DO_FORNECEDOR, FRETE_POR_KM) = (?, ?, ?) WHERE id = ?`, [body.ENDERECO, body.NOME_DO_FORNECEDOR, body.FRETE_POR_KM, id], (err) => {
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

module.exports = new FornecedorDAO