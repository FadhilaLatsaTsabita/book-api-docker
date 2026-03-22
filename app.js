console.log("APP JALAN");

const express = require('express');
const app = express();
app.use(express.json());

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" }
];

// ROOT
app.get('/', (req, res) => {
  res.send("📚 Book API is running 🚀");
});

// GET ALL BOOKS
app.get('/books', (req, res) => {
  res.status(200).json({
    status: "success",
    message: "List of books retrieved successfully",
    data: books
  });
});


// GET BOOK BY ID
app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({
      status: "error",
      message: "Book not found"
    });
  }

  res.status(200).json({
    status: "success",
    data: book
  });
});



// CREATE BOOK
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      status: "error",
      message: "Title and author are required"
    });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author
  };

  books.push(newBook);

  res.status(201).json({
    status: "success",
    message: "Book added successfully",
    data: newBook
  });
});


// UPDATE BOOK
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({
      status: "error",
      message: "Book not found"
    });
  }

  book.title = title || book.title;
  book.author = author || book.author;

  res.status(200).json({
    status: "success",
    message: "Book updated successfully",
    data: book
  });
});


// DELETE BOOK
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: "error",
      message: "Book not found"
    });
  }

  books.splice(index, 1);

  res.status(200).json({
    status: "success",
    message: "Book deleted successfully"
  });
});


app.listen(3001, () => {
  console.log("Server running on port 3001");
});