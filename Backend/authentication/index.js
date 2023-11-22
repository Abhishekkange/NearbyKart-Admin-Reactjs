const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = './routes';



app.get('/', routes);


app.listen(port,()=> {

    console.log('Authentication service listening on port :'+port);

});

