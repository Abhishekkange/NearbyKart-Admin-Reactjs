const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3200;



app.use(express.json())

app.use("/api", require('./routes/routes')); // Use the router


app.listen(port,()=> {

    console.log('Authentication service listening on port :'+port);

});

