const validacionPostUsuario = (data) => {
  const {primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion, telefono, email, contraseña, imagen } = data;

  if(!primer_nombre || !primer_apellido || !direccion || !telefono || !email || !contraseña || !imagen ){
    throw new Error("Todos los campos son obligatorios")
  }

   //--------------primer_nombre----------------

  if(typeof primer_nombre !== "string"){
    throw new Error("Nombre debe ser un string")
  }

  if(primer_nombre.length < 3){
    throw new Error("Nombre debe contener al menos 3 caracteres");
  }

  if(primer_nombre.length > 51){
    throw new Error("Nombre puede contener como maximo 50 caracteres")
  }

  if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/i.test(primer_nombre)){
    throw new Error("Nombre puede contener solo letras")
  }

//--------------------segundo_nombre-------------------

  if(typeof segundo_nombre !== "string"){
    throw new Error("Nombre debe ser un string")
  }

  if(segundo_nombre.length < 3){
    throw new Error("Nombre debe contener al menos 3 caracteres");
  }

  if(segundo_nombre.length > 51){
    throw new Error("Nombre puede contener como maximo 50 caracteres")
  }

  if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/i.test(segundo_nombre)){
    throw new Error("Nombre puede contener solo letras")
  }


  //--------------primer_apellido----------------

  if(typeof primer_apellido !== "string"){
    throw new Error("Apellido debe ser un string")
  }

  if(primer_apellido.length < 3){
    throw new Error("Apellido debe contener al menos 3 caracteres");
  }

  if(primer_apellido.length > 51){
    throw new Error("Apellido puede contener como maximo 50 caracteres")
  }

  if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/i.test(primer_apellido)){
    throw new Error("Apellido puede contener solo letras")
  }

//--------------------segundo_apellido-------------------

  if(typeof segundo_apellido !== "string"){
    throw new Error("Apellido debe ser un string")
  }

  if(segundo_apellido.length < 3){
    throw new Error("Apellido debe contener al menos 3 caracteres");
  }

  if(segundo_apellido.length > 51){
    throw new Error("Apellido puede contener como maximo 50 caracteres")
  }

  if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/i.test(segundo_apellido)){
    throw new Error("Apellido puede contener solo letras")
  }


//-------------------direccion------------------

if(typeof direccion !== "string"){
  throw new Error("Direccion debe ser un string")
}

if(direccion.length < 3){
  throw new Error("Direccion debe contener al menos 3 caracteres");
}

if(direccion.length > 51){
  throw new Error("Direccion puede contener como maximo 50 caracteres")
}

if(!/^[a-zA-ZñÑ0-9\s.\-]+$/i.test(direccion)){
  throw new Error("Direccion puede contener solo letras a-z, numeros y guiones '-'")
}

//-------------------telefono------------------

if(typeof telefono !== "number"){
  throw new Error("Telefono debe ser un numero")
}

if(telefono.toString().length < 10){
  throw new Error("Telefono debe contener al menos 10 caracteres")
}

if(telefono.toString().length > 25){
  throw new Error("Telefono no puede ser mayor a 25 caracteres")
}

if(!/^[0-9]+$/i.test(telefono)){
  throw new Error("Telefono debe ser un numero")
}

//-------------------email------------------

if(typeof email !== "string"){
  throw new Error("Email debe ser un string")
}

if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/i.test(email)){
  throw new Error("el Email ingresado no es valido, debe tener el siguiente formato: 'usuario@dominio.com")
}

//-------------------contraseña------------------

if(typeof contraseña !== "string"){
  throw new Error("Contraseña debe ser un string")
}

//-------------------imagen------------------

if(typeof imagen !== "string"){
  throw new Error("Imagen debe ser un string")
}

};

module.exports = {validacionPostUsuario}