const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs')


class Register extends Model {
  static init(sequelize) {
      super.init({
          currentTime: DataTypes.TIME,
          latitude: DataTypes.STRING,
          longitude: DataTypes.INTEGER,
          workstarts: DataTypes.TIME,
          workends: DataTypes.TIME,
      
      }, 
      {
          sequelize,  
      })  
  }   
  
  static associate(models){
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});      
  }
}
module.exports = User;


//Botão que clica e salva horário, localização (latitude e longitude) e se é saída ou entrada