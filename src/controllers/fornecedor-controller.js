// endereco cliente *
// endereco fornecedor
// preco frete

const bd = require('../infra/sqlite-db')

const fornecedores = (app) => {
  app.get('/fornecedores', (req, res) => {
    res.json({
      "fornecedores": bd.fornecedores
    })
  })

  app.get('/fornecedores', (req, res) => { // req = request / res = response
    bd.all('SELECT * FROM ENDERECO_FORNECEDOR', (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message })
      } else {
        res.json({
          "error": false,
          "endereco_fornecedores": rows
        })
      }
    })
  }
  )

  app.get('/fornecedores/:id', (req, res) => { // req = request / res = response
    const body = req.body
    const id = req.params.id

    bd.all(`SELECT * FROM ENDERECO_FORNECEDOR WHERE id = ${id}`, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message })
      } else {
        res.json({
          "error": false,
          "id": rows
        })
      }
    })
  }
  )
}

module.exports = fornecedores