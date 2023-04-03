import autores from "../models/Autor.js";


class AutoresController { 

    // GET
    static listarAutores = (req, res) => { 
        autores.find((err, autores) => { 
            res.status(200).json(autores)
    })
}

    // GET por ID
    static listarAutoresPorID = (req, res) => { 
        const id = req.params.id;

        autores.findById(id, (err, autores) => { 
            if(err){
                res.status(400).send({message: `${err.message} - ID do Autor não localizado`})    // 400 erro de usuário
            } else{ 
                res.status(200).send(autores);
            }
        })
    }

    // POST
    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
    
        autor.save((err) => {
    
          if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar Autor.`})
          } else {
            res.status(201).send(autor.toJSON())
          }
        })
      }
    

    // PUT
    static atualizarAutor = (req, res) => { 
        const id = req.params.id;  //Acessando o ID do livro que quero atualizar

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => { 
            if(!err) {
                res.status(200).send({message: 'Autor atualizado com SUCESSO!'})
            } else { 
                res.status(500).send({message: err.message})
            }
        })
    }

    // DELETE pelo ID
    static excluirAutor = (req, res) => { 
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => { 
            if(!err){
                res.status(200).send({message: 'Autor Removido com SUCESSO!'})
            } else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default AutoresController;