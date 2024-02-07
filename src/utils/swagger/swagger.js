const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const options = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'Optica Crisan',
      version: '1.0.0',
      description: 'Proyecto final backend',
    },
    security: [
      {
        jwt: [],
      },
    ],
  },
  apis: [path.join(__dirname, '..', '..', 'docs', '**', '**.yaml')],
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };

