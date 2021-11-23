// Importação do express
const customExpress = require('./config/custom-express')
const fornecedor = require('./controllers/fornecedor-controller')

// Config de app e porta
const app = customExpress()
const PORT = process.env.PORT || 3000

// Importação das funções controllers
fornecedor(app)

//Listener da porta
app.listen(PORT, () => {
    console.log(`Server rodando na porta: ${PORT}`)
})