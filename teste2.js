const data = require("./fakeData");

const registerUser = (req, res) => {

    const { name, job, permission } = req.body; // Desestruturação do Objeto Body

    if (!name || !job) {
        res.status(400).send('Campos "name" e "job" são obrigatórios'); // Campos obrigatórios para cadastro
        return;
    }

    const id = data.length + 1 // Cadastra o próximo Id do usuário (aqui temos um problema com o delete)

    const newUser = {
        id,
        name,
        job,
        permission,
    };

    data.push(newUser)

    res.send(newUser);
};

module.exports = { registerUser }