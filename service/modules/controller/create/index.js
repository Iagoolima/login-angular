const pool = require('../../../database/index');

async function RegisterUser(req, res) {
    const {name, email, password} = req.body;
    try{
        const result = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        );

        res.status(201).json(result.rows[0]);
        console.log('usuario cadastrado');
        
    } catch(error){
        console.error('erro ao cadastrar usuario')
    }
}

module.exports = {
    RegisterUser
}