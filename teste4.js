const data = require("./fakeData");

const updateUserData = (req, res) => {

    const id = req.query.id;

    const { name, job } = req.body

    const userIndex = data.findIndex((user) => user.id === Number(id));

    if (userIndex === -1) {
        res.status(404).send("Usuário não encontrado");
        return;
    }

    const user = data[userIndex];
    user.name = name
    user.job = job

    res.send(user);
};

module.exports = { updateUserData }