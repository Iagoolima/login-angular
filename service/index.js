const express = require('express');
const app = express();

const router = require('./../service/modules/router')

const cors = require('cors');

app.use(cors())
app.use(express.json())

app.use('/user', router);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Rota nao encontrada'});
});

app.listen(3000, ()=>{
    console.log('servidor funcionando na porta 3000')
});