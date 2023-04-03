const {createUsuario} = require("../../controllers/usuarios/postUsuarioController")


const postUserHandler = async (req,res)=>{
    const { id_tipo_usuario, id_usuario, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion, telefono,id_ciudad, estado, email,contraseña,imagen  } = req.body
    try {
      const newUser = await createUsuario( id_tipo_usuario, id_usuario, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion, telefono,id_ciudad, estado, email,contraseña, imagen)
       res.status(200).json(newUser)
    
    } catch (error) {
      res.status(400).json({ error: error.message})
    }
    
    }
    module.exports= {
        postUserHandler
    }