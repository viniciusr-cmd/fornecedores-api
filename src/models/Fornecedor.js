const FornecedorDAO = require('../DAO/fornecedorDAO')
const database = require('../infra/sqlite-db')
const chalk = require('chalk')

class Fornecedor {
  static async lista(req, res) {
    try {
      const listaFornecedor = await FornecedorDAO.selectFornecedor(database)
      res.status(200).json(listaFornecedor)
    } catch (err) {
      res.status(400).json(chalk.redBright(err))
    }
  }

  static async selecionaID(req, res) {
    try {
      const id = req.params.id
      const pegaID = await FornecedorDAO.selectID(id, database)
      res.status(200).json(pegaID)
    } catch (err) {
      res.status(400).json(chalk.redBright(err))
    }
  }

  static async adicionaFornecedor(req, res) {
    try {
      const body = req.body
      const postON = await FornecedorDAO.addFornecedor(body, database)
      res.status(200).json(postON)
    } catch (err) {
      res.status(400).json(chalk.redBright(err))
    }
  }

  static async atualizaFornecedor(req, res) {
    try {
      const id = req.params.id
      const body = req.body
      const updFornecedor = await FornecedorDAO.updateFornecedor(id, body, database)
      res.status(200).json(updFornecedor)
    } catch (err) {
      res.status(400).json(chalk.redBright(err))
    }
  }

  static async deleteFornecedor(req, res) {
    try {
      const id = req.params.id
      const delFornecedor = await FornecedorDAO.deleteFornecedor(id, database)
      res.status(200).json(delFornecedor)
    } catch (err) {
      res.status(400).json(chalk.redBright(err))
    }
  }
}

module.exports = Fornecedor