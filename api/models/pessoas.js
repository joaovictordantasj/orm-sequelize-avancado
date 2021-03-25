'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id',
      });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id',
      });
    }
  }
  Pessoas.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          funcaoValidadora: dado => {
            if (dado.length < 3) {
              throw new Error('O campo nome deve ter pelo menos 3 caracteres!');
            }
          },
        },
      },
      ativo: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: 'Dado do tipo email inválido!',
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      defaultScope: {
        where: { ativo: true },
      },
      scopes: {
        todos: { where: {} },
        //etc: { contraint: valor }
      },
      modelName: 'Pessoas',
    }
  );
  return Pessoas;
};
