const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect ('mongodb+srv://LahiruH:Lahi#1234@cluster0.emfv7.mongodb.net/<dbname>?retryWrites=true&w=majority',
{ useNewUrlParser: true },
() => console.log("connected to db!"))

//Import rutes
const authRoute = require('./routes/auth');


//Rout midleware
app.use('/api/user',authRoute   )

app.listen(3000, () => console.log("Server up and runing"));

