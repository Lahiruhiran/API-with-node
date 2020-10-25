const express = require('express');
const app = express();

//Import rutes
const authRoute = require('./routes/auth');

app.listen(3000, () => console.log("Server up and runing"));

