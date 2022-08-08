const express = require("express");
const mysql = require("mysql12");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: process.env.MySql_Password,
        database: "movies_db"
    },
    console.log(`Connected to the movies_db database.`)
);