  const { Model, DataTypes } = require('sequelize');
  const bcrypt = require('bcryptjs')


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
            islogged: DataTypes.BOOLEAN         
        }, 
        {
            sequelize,
            hooks: {
                beforeCreate: (user) => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt);
                },     
            },
        })  
    }     
}
module.exports = User;