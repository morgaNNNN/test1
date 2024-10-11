// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const bodyParser = require ("body-parser");
// const path = require('path')
// const hbs = require('hbs')

// app.use(bodyParser.urlencoded({extended: true}));


// mongoose.connect("mongodb+srv://g0d:g0d1.@cluster0.6ksbj.mongodb.net/give"), {useNewUrlParser: true}, {useUnifiedTopology: true}

// app.use(express.static(path.join(__dirname, 'public')));

// // Route for index.html
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Route for prijava.html
// app.get('/prijava', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'prijava.html'));
// });

// // Route for pravila.html
// app.get('/pravila', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'pravila.html'));
// });



// const giveSchema = {
//     name: String,
//     surname: String,
//     email: String,
//     city: String,
//     phone: String

// }

// const Give = mongoose.model("Give", giveSchema);

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/public/index.html")
// })



// app.post("/", function(req, res){
//     let give = new Give({
//         name: req.body.name,
//         surname: req.body.surname,
//         email: req.body.email,
//         city: req.body.city,
//         phone: req.body.phone
//     });
//     give.save();
//     res.redirect("/");
// })


// app.listen(3000, function(){
// console.log("server is running on 3000");

// })

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect("mongodb+srv://g0d:g0d1.@cluster0.6ksbj.mongodb.net/formData"), {useNewUrlParser: true}, {useUnifiedTopology: true}

// Define a schema and model for your form data
const formDataSchema = new mongoose.Schema({
name: String,
surname: String,
email: String,
city: String,
phone: String
});

const FormData = mongoose.model('FormData', formDataSchema);

// Routes for HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/prijava', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'prijava.html'));
});

app.get('/pravila', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pravila.html'));
});

// Route to handle form submission
app.post('/', (req, res) => {
  const formData = new FormData({
              name: req.body.name,
              surname: req.body.surname,
              email: req.body.email,
              city: req.body.city,
              phone: req.body.phone
  });

  formData.save();
  res.redirect("/");
    }
  );

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
