import express from 'express'
import db from './config/dbConnect.js'
import livros from './models/Livro.js'
import routes from './routes/index.js'

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

// instancia do express
const app = express()

// Recurso de interpretação via POST / PUT / armazena e manipula
app.use(express.json())

routes(app);

// Funções
    function buscaLivro(id) { 

        return livros.findIndex(livro => livro.id == id)
    }

export default app