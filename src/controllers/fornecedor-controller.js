const bd = require('../infra/sqlite-db')
const Fornecedor = require('../models/Fornecedor')

const fornecedores = (app) => {
  app.get('/', (req, res) => {
    res.send('<h1>Daora po</h1>')
  })

  app.get('/fornecedores', (req, res) => { // req = request / res = response
    Fornecedor.lista(req, res)
  })

  app.get('/fornecedores/:id', (req, res) => { // req = request / res = response
    Fornecedor.selecionaID(req, res)
  })

  app.post('/fornecedores/:id', (req, res) => {
    Fornecedor.adicionaFornecedor(req, res)
  })

  app.patch('/fornecedores/:id', (req, res) => {
    Fornecedor.atualizaFornecedor(req, res)
  })

  app.delete('/fornecedores/:id', (req, res) => {
    Fornecedor.deleteFornecedor(req, res)
  })
}

module.exports = fornecedores