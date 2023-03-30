import mongoose from "mongoose";

// Conexão com o Banco
//"mongodb+srv://alura:<password>@alura.o8qdrjf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect("mongodb+srv://alura:123@alura.o8qdrjf.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;