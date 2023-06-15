const validatePermissions = (permissions) => {
    return (req, res, next) => {
        // Obter o usuário da solicitação (Passado no app.js)
        const user = req.user;

        const hasPermissions = permissions.every(permission => user.permission.includes(permission));

        if (!hasPermissions) {
            return res.status(401).send('Acesso negado');
        }

        next();
    };
};

module.exports = {
    validatePermissions
};
