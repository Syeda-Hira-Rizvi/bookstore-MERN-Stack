import express from "express";
import cors from 'cors';
import {PORT,URI} from "./config.js";
// const mongoose = require("mongoose");
import mongoose from 'mongoose';
import {Book} from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

//Middleware for parsing request body 
app.use(express.json());

//Middleware for handLing CORS POLICY
//Option 1: Allow all Origins with default of cors(*)
app.use(cors())
//Option 2: Allow custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )

app.get('/',(request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Stack Tutorial')
});

// a middleware for books ..this will tell express that each route with prefix /books ..handle with this middleware..so for this we have to change our routes in the filebooksRoute.js.So delete books from /books in the route.
app.use('/books',booksRoute)


//mongoose is a popular object data modelling library to interact with the mongodb easily with javascript commands.
mongoose.connect(URI) 
.then(()=> console.log("Mongodb connected successfully"))
.catch((error)=>console.log(error))


app.listen(PORT, ()=>{
    console.log(`App is listening to Port: ${PORT}`);
});