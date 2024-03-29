const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-fdyzz.mongodb.net/semana09?retryWrites=true&w=majority', {
     useNewUrlParser: true,
     useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)