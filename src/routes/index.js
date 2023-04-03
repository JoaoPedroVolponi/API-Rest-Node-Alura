import express from 'express'
import livros from "./livrosRoutes.js"
import autores from './autoresRoutes.js'

const routes = (app) => { 
    app.route('/').get((req, res) => { 
        // res.status(200).send({titulo:'Bem Vindo a MINI-API'}) //  > Aparece o titulo em formato JSON
        res.status(200).send('Bem Vindo a MINI API 1 ')

    })

    app.use(
        express.json(),
        livros, 
        autores   //Schemas
    )
}

export default routes