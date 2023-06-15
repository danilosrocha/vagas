const data = require("./fakeData");

const deleteUserByName = (req, res) => {

    const name = req.query.name;

    const userIndex = data.findIndex(user => user.name === name); // Procura pelo index do usuário cadastrado

    if (userIndex === -1) {
        return res.status(404).send('Usuário não encontrado');
    }

    data.splice(userIndex, 1); // Utilizando o método splice para remover o usuário

    res.status(202).send('Usuário deletado!') // Utilizar o código 404 Not Found
};

module.exports = { deleteUserByName }