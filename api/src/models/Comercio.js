const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('comercio', {
        id_comercio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },

        id_categoria_comercio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "categoria_comercio",
                key: "id_categoria_comercio"
            }
        },

        nombre_comercio: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },

        direccion: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },

        id_ciudad: {
            type: DataTypes.INTEGER,
            allowNull: false,

            references: {
                model: "ciudad",
                key: "id_ciudad"
            }
        },

        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,

        },

        nombre_contacto: {
            type: DataTypes.STRING(50),
            allowNull: false,

        },

        cargo: {
            type: DataTypes.STRING(30),
            allowNull: false,

        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
};
