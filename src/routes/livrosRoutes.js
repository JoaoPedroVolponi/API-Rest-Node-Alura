import express from 'express'
import LivrosController from "../controllers/livrosController.js";


const router = express.Router()

router
    // GET
    .get('/livros', LivrosController.listarLivros)
 
    // POST
    .post('/livros', LivrosController.cadastrarLivro)

    // PUT
    .put('/livros/:id', LivrosController.atualizarLivro)

    export default router;