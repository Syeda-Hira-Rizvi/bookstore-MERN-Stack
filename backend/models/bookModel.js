import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
          type: String,
          required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    }, 
    {
        timestamps: true,
    }      
);




//creating a book model to store books in the database.The model contains schema which has name of type string.
export const Book = mongoose.model('Book', bookSchema);