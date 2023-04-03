import express from 'express'

import AutoresController from '../controllers/autoresController.js';


const router = express.Router()

router
    // GET
    .get('/autores', AutoresController.listarAutores)
    .get('/autores/:id', AutoresController.listarAutoresPorID)
    // POST
    .post('/autores', AutoresController.cadastrarAutor)

    // PUT
    .put('/autores/:id', AutoresController.atualizarAutor)

    // DELETE
    .delete('/autores/:id', AutoresController.excluirAutor)

    export default router;