const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Plataforma Educativa",
      version: "1.0.0",
      description: "Documentación Swagger"
    },
    servers: [
      { url: "http://localhost:3000" }
    ]
  },
  apis: ["./src/routes/*.js"]
};

module.exports = swaggerJsdoc(options);
