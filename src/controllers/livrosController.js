import livros from "../models/Livro.js";


class LivrosController { 

    static listarLivros = (req, res) => { 
        livros.find((err, livros) => { 
            res.status(200).json(livros)
    })
}

    static cadastrarLivro = (req, res) => { 
        let livro = new livros(req.body);

        livro.save((err) => { 
            if(err) { 
                res.status(500).send({message: `${err.message} Falha ao Cadastar Livro.`})
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

}

export default LivrosController;