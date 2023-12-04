
//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
//<!-- const http = require('http').Server(app);

//const mongoose = require('mongoose');

//mongoose.connect("mongodb+srv://eshwarsk6:Eshwar98@pms.xjnj6nm.mongodb.net/?retryWrites=true&w=majority");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/home.html");
})

app.post("/", (req, res) => {
    const data = req.body;
    console.log(data);
})



app.listen(3000, ()=> {
    console.log("Server connected");
})

