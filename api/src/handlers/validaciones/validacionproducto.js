const validacionPostProducto = (data) =>{
  const {nombre, fecha_inicial, fecha_final, descripcion_producto, cantidad,existencia, valor, imagen} = data

  if(!nombre || !fecha_inicial || !fecha_final || !descripcion_producto || !cantidad || !existencia || !valor || !imagen){
    throw new Error("Todos los campos son obligatorios");
  }

  //------------nombre-------------

  if(typeof nombre !== "string"){
    throw new Error("Nombre debe ser un string")
  }

  if(nombre.length < 3){
    throw new Error("Nombre debe contener al menos 3 caracteres");
  }

  if(nombre.length > 51){
    throw new Error("Nombre puede contener como maximo 50 caracteres")
  }

  if(!/^[a-zA-ZñÑ0-9\s._\-]+$/i.test(nombre)){
    throw new Error("Nombre puede contener solo letras a-z, numeros y guiones '-', '_'")
  }

//----------------fecha_inicial-------------------

if(!/^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/i.test(fecha_inicial)){
  throw new Error("El formato de fecha correcto es aaaa-mm-dd ")
}

//----------------fecha_final-------------------

if(!/^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/i.test(fecha_final)){
  throw new Error("El formato de fecha correcto es aaaa-mm-dd ")
}

//--------------descripcion_producto---------------

if(typeof descripcion_producto !== "string"){
  throw new Error("Descripcion debe ser un string")
}

if(descripcion_producto.length < 10){
  throw new Error("Descripcion debe contener al menos 10 caracteres");
}

//-----------------cantidad------------------

if(typeof cantidad !== "number"){
  throw new Error("Cantidad debe ser un numero")
}

if(!/^[0-9]+$/i.test(cantidad)){
  throw new Error("Cantidad debe ser un numero")
}

//---------------------existencia-------------

if(typeof existencia !== "number"){
  throw new Error("Existencia debe ser un numero")
}

if(!/^[0-9]+$/i.test(existencia)){
  throw new Error("Existencia debe ser un numero")
} 

//-------------------valor------------

if(typeof valor !== "number"){
  throw new Error("Valor debe ser un numero")
}

if(!/^[0-9.]+$/i.test(valor)){
  throw new Error("Valor debe ser un numero")
} 

}

module.exports = {validacionPostProducto}