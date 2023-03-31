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

// const livros = [ 
//     { id: 1, 'titulo': 'Senhor dos Aneis ' }, 
//     { id: 2, 'titulo': ' O Hobiit'},
// ]

// Rotas 200 - Ok

// METODOS
    // GET


    //Buscando livros por ID
app.get('/livros/:id', (req, res) => { 
    let index = buscaLivro(req.params.id) // Busca do index
    res.json(livros[index])  // retorna apenas a posição do index
})

// -----------------------------------------------------

    // POST
app.post('/livros', (req, res) => { 
    // BODY corpo da req
    livros.push(req.body); 
    res.status(201).send('Livro foi cadastrado com sucesso!') // 201 Criado - OK
})

// -----------------------------------------------------
    // PUT
        // Alterando o nome do livro
app.put('/livros/:id', (req, res) => { 
    let index = buscaLivro(req.params.id) 
        // posicao do livro no array = novo titulo vindo no corpo da requisicao
    livros[index].titulo = req.body.titulo 
    res.json(livros)
})

// -----------------------------------------------------
    // DELETE
    app.delete('/livros/:id', (req, res) => { 
        let {id} = req.params // atribuição via desestruturação
        let index = buscaLivro(id) 
        //apagando a posicao 
        livros.splice(index, 1) // posicao , quantidade de elementos
        res.send(`Livro ${id} removido com Sucesso!`)
    })

// -----------------------------------------------------

// Funções
    function buscaLivro(id) { 

        return livros.findIndex(livro => livro.id == id)
    }

export default app