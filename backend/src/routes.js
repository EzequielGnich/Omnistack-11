const express = require('express');
const crypto = require('crypto');

const routes = express.Router();

const connection = require('./database/connection');

routes.get('/ongs', async (req, res) => {
    const ongs = await connection('ongs').select('*');

    if (!ongs[0]) return res.json({ msg: "Não existem ongs cadastradas no banco de dados"}) 

    return res.json({ongs});
});

routes.post('/ongs', async (req, res) => {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id, name, email, whatsapp, city, uf
    });

    return res.json({ id });
})

module.exports = routes;