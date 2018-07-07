const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Inicializa à aplicação.
const app = express();

//Trasmite infos atráves do formato Json.
app.use(express.json());

//Permite que outros dominínos acessem à aplicação 
app.use(cors());

//Conexão com BD
mongoose.connect('mongodb://127.0.0.1:27017/gerenciadordeseries',  {useNewUrlParser: true });
require('./series');

const Serie = mongoose.model('Serie');


app.get('/series', async (req, res) => {
    const series = await Serie.find();

    return res.json(series);
});

app.post('/series', async (req, res) => {
    const series = await Serie.create(req.body);

    return res.json(series);
});


//Define a porta localhost 3333
app.listen(3333);