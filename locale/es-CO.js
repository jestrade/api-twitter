const dictionaryESCO = {
  errors: {
    notAuthorized: "no autorizado",
    notAuthenticated: "no autenticado",
    invalidData: "datos no válidos",
    operationNotAllowed: "Operacion no permitida",
    validate: {
      maxCharactersAllowed: "se excedió el máximo de caracteres",
      emptyData: "datos vacíos",
      invalidUsername: "nombre de usuario no válido",
      invalidName: "nombre inválido",
      invalidEmail: "email inválido",
      passwordsDontMatch: "las contraseñas no coinciden",
      invalidPassword: "contraseña invalida",
      invalidRole: "rol invalido",
    },
    user: {
      userExists: "usuario actualmente existe",
      userNotExists: "usuario no existe",
      onUpdate: "error al intentar actualizar el usuario",
      onCreate: "error al intentar crear el usuario",
      onDelete: "error al intentar eliminar el usuario",
    },
    tweet: {
      onDelete: "error al intentar eliminar el tweet",
      tweetNotExists: "tweet no existe",
    },
  },
  success: {
    user: {
      onUpdate: "usuario actualizado correctamente",
      onCreate: "usuario creado exitosamente",
      onUpdate: "usuario actualizado correctamente",
      onDelete: "usuario eliminado correctamente",
    },
    tweet: {
      onCreate: "tweet creado correctamente",
      onUpdate: "tweet actualizado correctamente",
      onDelete: "tweet eliminado correctamente",
    },
  },
};

module.exports = { dictionaryESCO };
