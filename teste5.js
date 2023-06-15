const data = require("./fakeData");

const getUserReadCount = (req, res) => {
    const name = req.query.name;

    const user = data.find(user => user.name === name);

    if (!user) {
        return res.status(404).send('Usuário não encontrado');
    }

    // Conta quantas vezes o usuário foi lido
    const readCount = user.readCount || 0; // Este campo é atualizado no get toda vez que é lido, aqui apenas recupera

    res.send({ readCount });
};

module.exports = {
    getUserReadCount
};
