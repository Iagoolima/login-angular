const pool = require('../../../database/index');

async function LoginUser(req, res){

    const { email, password } = req.body;

    try{

        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1 AND password = $2',
            [email, password]
        )

        if(result.rows.length === 0){
            return res.status(401).json({error: 'credenciais invalidas'})
        }

        const user = result.rows[0]
        const  { name } = user;
        res.status(200).json({message: 'login bem sucedido', name})

    }catch(error){
        console.error('erro ao autenticar estudante', error)
        res.status(500).json({error: 'erro no servidor'})
    }
}

module.exports = {
    LoginUser
}