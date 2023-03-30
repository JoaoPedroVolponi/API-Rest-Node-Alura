// nodemon -> Biblioteca -> live reload - a cada alteração e salvar ele identifica e faz o reload
import app from "./src/app.js";

const port = process.env.PORT || 3000; 



app.listen(port, () => { 
    console.log(`Servidor escutando em http://localhost: ${port}`)
})
