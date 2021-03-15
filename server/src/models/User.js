  
const { Model, DataTypes } = require('sequelize');


class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            password: DataTypes.STRING,
            cpf: DataTypes.INTEGER,
            phone: DataTypes.INTEGER,
            email: DataTypes.STRING,
            occupation: DataTypes.STRING,
            workstarts: DataTypes.INTEGER,
            workends: DataTypes.INTEGER,
            lunchstarts: DataTypes.INTEGER,
            lunchends: DataTypes.INTEGER,          
        }, { sequelize })
    }
}
module.exports = User;