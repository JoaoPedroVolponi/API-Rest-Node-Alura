import livros from "../models/Livro.js";


class LivroController { 

    // GET
    static listarLivros = (req, res) => { 
        livros.find()
        .populate('autor')
            .exec((err, livros) => { 
            res.status(200).json(livros)
    })
}

    // GET por ID
    static listarLivrosPorID = (req, res) => { 
        const id = req.params.id;

        livros.findById(id)
        .populate('autor', 'nome')  //Schema - campos
            .exec((err, livros) => { 
            if(err){
                res.status(400).send({message: `${err.message} - ID do livro não localizado`})    // 400 erro de usuário
            } else{ 
                res.status(200).send(livros);
            }
        })
    }


    // GET por EDITORA

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora
    
        livros.find({'editora': editora}, {}, (err, livros) => {
          res.status(200).send(livros);
    
        })
      }
    

    // POST
    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
    
        livro.save((err) => {
    
          if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
          } else {
            res.status(201).send(livro.toJSON())
          }
        })
      }

    // PUT
    static atualizarLivro = (req, res) => { 
        const id = req.params.id;  //Acessando o ID do livro que quero atualizar

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => { 
            if(!err) {
                res.status(200).send({message: 'Livro atualizado com SUCESSO!'})
            } else { 
                res.status(500).send({message: err.message})
            }
        })
    }

    // DELETE pelo ID
    static excluirLivro = (req, res) => { 
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => { 
            if(!err){
                res.status(200).send({message: 'Livro Removido com SUCESSO!'})
            } else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default LivroController;