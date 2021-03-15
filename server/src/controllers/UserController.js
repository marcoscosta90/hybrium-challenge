const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        if (users == '' || users == null) {
            return res.status(200).send({ message: "Nenhum colaborador cadastrado" })
        }

        return res.status(200).send({ users })

    },

    async store(req, res) {
        const { name, password, cpf, phone, email, occupation, workstarts, workends, lunchstarts, lunchends } = req.body;

        const user = await User.create({ name, password, cpf, phone, email, occupation, workstarts, workends, lunchstarts, lunchends });

        return res.status(200).send({
            status: 1,
            message: 'usuario cadastrado com sucesso',
            user
        })

    },
    async update(req, res) {
        const { name, password, cpf, phone, email, occupation, workstarts, workends, lunchstarts, lunchends } = req.body;
        const { user_id } = req.params;

        await User.update({
            name, password, cpf, phone, email, occupation, workstarts, workends, lunchstarts, lunchends
        }, {
            where: {
                id: user_id
            }
        });
        return res.status(200).send({
            status: 1,
            message: 'usuario atualizado com sucesso'
        });

    },
    async delete(req, res) {
        const { user_id } = req.params;

        await User.destroy({
            where: {
                id: user_id
            }
        })
        return res.status(200).send({
            status: 1,
            message: "Usuario deletado com sucesso"
        })
    },

};