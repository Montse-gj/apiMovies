class ErrorFetch extends Error {
    constructor() {
        super("Error de fetch")
    }
}

class ErrorRespuesta extends Error {
    constructor(mensaje) {
        super(`Respuesta incorrecta: ${mensaje}`)
    }
}

export {
    ErrorFetch,
    ErrorRespuesta,
}