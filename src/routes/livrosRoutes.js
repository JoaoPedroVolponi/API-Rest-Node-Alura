import express from 'express'
import LivroController from "../controllers/livrosController.js";


const router = express.Router()

router
    // GET
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.listarLivrosPorID)

    //POST
    .post("/livros", LivroController.cadastrarLivro)

    //PUT
    .put("/livros/:id", LivroController.atualizarLivro)

    //DELETE
    .delete("/livros/:id", LivroController.excluirLivro)

    export default router;