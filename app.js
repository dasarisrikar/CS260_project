const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');
const moyeRouter = require('./routes/moye');
const bodyParser = require('body-parser');

// Load environment variables from .env file
require('dotenv').config();
dotenv.config({ path: './.env' });
console.log(process.env.DATABASE_USER, process.env.DATABASE_PASSWORD); 

const app = express();
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, '/public');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'hbs');

db.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("MySQL connected....");
});

app.get("/signin", (req, res) => {
    res.render("signin");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/f1", (req, res) => {
    res.render("f1");
});

app.use('/auth', require('./routes/auth'));
app.use('/moye', moyeRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});



// Log the environment variables
console.log('DATABASE_USER:', process.env.DATABASE_USER);
console.log('DATABASE_PASSWORD:', process.env.DATABASE_PASSWORD);
console.log('DATABASE_HOST:', process.env.DATABASE_HOST);
console.log('DATABASE:', process.env.DATABASE);
