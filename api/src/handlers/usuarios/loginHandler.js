const { loginUser } = require('../../controllers/usuarios/loginController')

const loginHandler = async (req, res, next) => {
    const user = req.body

    try {
        const controller = await loginUser(user)
        res.status(200).send(controller)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    loginHandler
}