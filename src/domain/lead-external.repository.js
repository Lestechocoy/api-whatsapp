const LeadExternal = {
    sendMsg: async ({ message, phone }) => {
      // Implementación de la función sendMsg
      // Por ejemplo, podrías enviar un mensaje a través de un servicio web
      // y devolver una promesa con la respuesta
      // Aquí se muestra un ejemplo de una función asíncrona simulada
      return new Promise((resolve, reject) => {
        // Simulación de enviar un mensaje
        setTimeout(() => {
          const response = `Mensaje "${message}" enviado a ${phone}`;
          resolve(response);
        }, 1000); // Simulación de tiempo de respuesta de 1 segundo
      });
    },
  };
  
  module.exports = LeadExternal;
  