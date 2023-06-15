const data = require("./fakeData");

const getUserByName = (req, res) => {

    const name = req.query.name;

    const user = data.find(user => user.name === name) // Utilizar o método find para localizar o nome

    if(!user) {
        return res.status(404).send('Usuário não encontrado') // Utilizar o código 404 Not Found
    }

    // Atualiza o readCount do usuário
    user.readCount = user.readCount ? user.readCount + 1 : 1;
    
    res.send(user)   
};

const getUsers = (_, res) => {
    res.send(data);
};

module.exports = {
    getUserByName,
    getUsers
};