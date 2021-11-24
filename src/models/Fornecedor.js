const FornecedorDAO = require('../DAO/fornecedorDAO')
const database = require('../infra/sqlite-db')

class Fornecedor {
    static async lista(req, res) {
        res.status(200).json(await FornecedorDAO.selectFornecedor(database))
    }

    static async selecionaID(req, res) {
        const id = req.params.id
        res.status(200).json(await FornecedorDAO.selectID(id, database))
    }

    static async adicionaFornecedor(req, res) {
        const body = req.body
        res.status(200).json(await FornecedorDAO.addFornecedor(body, database))
    }

    static async atualizaFornecedor(req, res) {
        const id = req.params.id
        const body = req.body
        res.status(200).json(await FornecedorDAO.updateFornecedor(id, body, database))
    }

    static async deleteFornecedor(req, res) {
        const id = req.params.id
        res.status(200).json(await FornecedorDAO.deleteFornecedor(id, database))
    }
}

module.exports = Fornecedor