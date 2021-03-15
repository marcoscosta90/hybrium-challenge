const User = require('../models/User');
const Mobile = require('../models/Register');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'register' }
        });

        if (!user) {
            return res.status(400).send({
                status: 0,
                message: 'Usuario nao encontrado!'
            });
        }

        return res.status(200).send(user);
    },

    async store(req, res) {

        try {

            const { user_id } = req.params;
            const { currentTime, latitude, longitude, workstarts, workends } = req.body;

            const user = await User.findByPk(user_id);

            if (!user) {
                return res.status(400).json({
                    status: 0,
                    message: 'Usuário não encontrado!'
                });
            }

            const mobile = await Register.create({
                currentTime,
                latitude,
                longitude,
                workstarts,
                workends,
                user_id,
            });

            return res.status(200).json({
                status: 1,
                message: "Ponto atualizado com sucesso!",
                mobile
            });

        } catch (err) {
            return res.status(400).json({ error: err });
        }
    },

    async delete(req, res) {
        const id = req.params.id;

        try {
            const mobile = await Register.findByPk(id);

            if (mobile) {
                await Register.destroy({ where: { id } });

                return res.status(200).json({
                    status: 1,
                    message: "Ponto deletado com sucesso!",
                });

            } else {
                return res.status(400).json({
                    status: 0,
                    message: 'Ponto não encontrado!'
                });
            }


        } catch (err) {
            return res.status(400).json({ error: err });
        }
    },

    async update(req, res) {
        const id = req.params.id;
        const { currentTime, latitude, longitude, workstarts, workends } = req.body;

        try {
            const mobile = await Address.findByPk(id);

            if (mobile) {
                await Register.update({ currentTime, latitude, longitude, workstarts, workends }, { where: { id } });

                return res.status(200).json({
                    status: 1,
                    message: "ponto atualizado com sucesso!",
                });

            } else {
                return res.status(400).json({
                    status: 0,
                    message: 'Ponto encontrado!'
                });
            }


        } catch (err) {
            return res.status(400).json({
                status: 0,
                message: 'Erro ao atualizar o ponto'
            });
        }
    }
};