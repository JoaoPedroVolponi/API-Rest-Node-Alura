// nodemon -> Biblioteca -> live reload - a cada alteração e salvar ele identifica e faz o reload


const http = require("http")  // modulo nativo HTTP
const port = 3000; 

const rotas = { 
    '/':  'Curso de Node',
    '/livros': 'Entrei na pagina de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pagina de editora',
    '/sobre': 'Info sobre o Projeto',
}


const server = http.createServer((req, res) => { 
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url]); // resposta /url
})

server.listen(port, () => { 
    console.log(`Servidor escutando em http://localhost: ${port}`)
})
