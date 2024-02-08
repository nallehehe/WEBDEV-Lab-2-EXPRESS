const express = require("express")
const axios = require("axios");
const app = express();
const PORT = 3000;
const cors = require("cors")
const path = require('path');

app.use(cors());
app.use(express.json());


//Create book review
app.post("/books", async (req, res) => {
    const newBook = req.body;
    
    try {
        const response = await axios.post("bookreviewing.azurewebsites.net/book", newBook);
        res.json(response.data)
    } catch (error) {
        res.status(500).send("Book review failed to be created.");
    }
});

//Get all book reviews
app.get("/books", async (req, res) => {
    try {
        const response = await axios.get("bookreviewing.azurewebsites.net/books");
        res.json(response.data);
    } catch (error) {
        res.status(500).send("Failed to retrieve all book reviews.");
    }
});

//Get book review by ID
app.get("/books/:id", async (req, res) => {
    const bookId = req.params.id;
    
    try {
        const response = await axios.get("bookreviewing.azurewebsites.net/books/${id}");
        res.json(response.data);
    } catch (error) {
        res.status(500).send("Failed to retrieve that book review.");
    }
});

//Update book review
app.put("/books/:id", async (req, res) => {
    const bookId = req.params.id;
    const updatedBook = req.body;

    try {
        const response = await axios.put("bookreviewing.azurewebsites.net/books/${id}", updatedBook);
        res.json(response.data);
    } catch (error) {
        res.status(500).send("Failed to update the book review.");
    }
});

//Delete book review
app.delete("/books/:id", async (req, res) => {
    const bookId = req.params.id;
    
    try {
        await axios.delete("bookreviewing.azurewebsites.net/books/${id}");
        res.json(response.data);
    } catch (error) {
        res.status(500).send("Failed to delete that book review.");
    }
});

app.listen(PORT, () => {
    console.log("Listening to port " + PORT);
});