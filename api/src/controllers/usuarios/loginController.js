const { Usuario } = require("../../db");
const bcrypt = require("bcrypt");
const { generateToken } = require('./generateToken')

const loginUser = async (user) => {
    console.log('SERVER_LOGIN', user)

    try {
        const db_user = await Usuario.findOne({
            where: {
                email: user.email,
            }
        })

        console.log("DB USER: " ,db_user)

        if (db_user) {
            if (bcrypt.compareSync(user.password, db_user.password)) {
                return {
                    msg: 'Login success',
                    session: {
                        ...db_user,
                    },
                    token: generateToken(db_user)
                }
            } else {
                throw new Error('Invalid email or password')
            }
        } else {
            throw new Error('User not found')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    loginUser
}