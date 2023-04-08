const { Usuario } = require("../../db");
const bcrypt = require("bcryptjs");
const { generateToken } = require('./generateToken')

const loginUser = async (user) => {
    console.log('SERVER_LOGIN', user)

    try {
        const db_user = await Usuario.findOne({
            where: {
                email: user.email
            }
        })

        if (db_user) {
            if (bcrypt.compareSync(user.contraseña, db_user.contraseña)) {
                return {
                    msg: 'Login success',
                    session: {
                        ...db_user,
                        token: generateToken(db_user)
                    }
                }
            } else {
                throw new Error('Invalid email or password')
            }
        } else {
            throw new Error('Invalid email or password')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    loginUser
}