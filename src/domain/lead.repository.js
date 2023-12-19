const { Lead } = require("./lead");

/**
 * Esta es la interfaz que debe cumplir el repositorio de infraestructura,
 * ya sea mysql, mongo, etc.
 */
module.exports = {
  save: ({ message, phone }) => {
    return Promise.resolve(new Lead({ message, phone }));
  },
  getDetail: (id) => {
    return Promise.resolve(null); // Podrías implementar la lógica para obtener el detalle por ID aquí
  },
};
