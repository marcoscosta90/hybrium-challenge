const User = require('../models/User');
const bcrypt = require('bcryptjs')


module.exports = {
    async login(req, res) {
        const { password, email, islogged } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).send({
                status: 0,
                message: 'E-mail ou senha incorreto!',
                user: {}
            });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).send({
                status: 0,
                message: 'E-mail ou senha incorreto!',
                user: {}
            });
        }

        const user_id = user.id;

        await User.update({
            islogged
        }, {
            where: {
                id: user_id
            }
        });

        user.password = undefined       

        return res.status(200).send({
            status: 1,
            message: "Usuário logado com sucesso!",
            user
        });

    },



    async index(req, res) {
        const users = await User.findAll();

        if (users == '' || users == null) {
            return res.status(200).send({ message: "Nenhum colaborador cadastrado" })
        }
        return res.status(200).send({ users })
    },

    async indexOne(req, res) {
        const { user_id } = req.params;
        const user = await User.findOne({
            where:
                { id: user_id }
        });
        if (user === null) {
            return res.status(200).send({ message: "Nenhum colaborador cadastrado" })
        } else {
            return res.status(200).send({ user })
        }
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