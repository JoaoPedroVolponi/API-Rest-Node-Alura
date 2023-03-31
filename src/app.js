import express from 'express'
import db from './config/dbConnect.js'
import livros from './models/Livro.js'
import routes from './routes/index.js'

db.on("error", console.log.bind(console, 'Erro de Conexão'))
db.once("Open", () => { 
    console.log('Conexão com o Banco feita com sucesso!')
})

// instancia do express
const app = express()

// Recurso de interpretação via POST / PUT / armazena e manipula
app.use(express.json())

routes(app);

export default app