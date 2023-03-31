import express from 'express'
import LivrosController from "../controllers/livrosController.js";


const router = express.Router()

router
    // GET
    .get('/livros', LivrosController.listarLivros)
    .get('/livros/:id', LivrosController.listarLivrosPorID)
    // POST
    .post('/livros', LivrosController.cadastrarLivro)

    // PUT
    .put('/livros/:id', LivrosController.atualizarLivro)

    // DELETE
    .delete('/livros/:id', LivrosController.excluirLivro)

    export default router;